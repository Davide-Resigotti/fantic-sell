import { useEffect, useState, useCallback } from 'react';

/**
 * Enhanced media loader hook based on valenti-sell progressive loading logic
 * Combines image preloading, video thumbnail generation, and video preloading
 * with better error handling and progress tracking
 */
export const useEnhancedMediaLoader = () => {
  const [loadingState, setLoadingState] = useState({
    phase: 'idle', // 'idle', 'images', 'thumbnails', 'videos', 'complete'
    imagesLoaded: 0,
    videosLoaded: 0,
    thumbnailsGenerated: 0,
    totalImages: 0,
    totalVideos: 0,
    errors: []
  });

  const [preloadedAssets, setPreloadedAssets] = useState({
    images: new Set(),
    videos: new Set(),
    thumbnails: new Map() // Map to store thumbnail data URLs
  });

  const addError = useCallback((error) => {
    setLoadingState(prev => ({
      ...prev,
      errors: [...prev.errors, { timestamp: Date.now(), message: error }]
    }));
  }, []);

  const loadImageSequentially = useCallback(async (imageUrls, folder = '') => {
    setLoadingState(prev => ({ ...prev, phase: 'images', totalImages: imageUrls.length }));
    
    for (let i = 0; i < imageUrls.length; i++) {
      try {
        await new Promise((resolve, reject) => {
          const img = new Image();
          const fullPath = folder ? `${folder}/${imageUrls[i]}` : imageUrls[i];
          
          img.onload = () => {
            setPreloadedAssets(prev => ({
              ...prev,
              images: new Set([...prev.images, fullPath])
            }));
            setLoadingState(prev => ({ ...prev, imagesLoaded: i + 1 }));
            console.log(`✅ Image loaded (${i + 1}/${imageUrls.length}): ${fullPath}`);
            resolve();
          };
          
          img.onerror = (error) => {
            addError(`Failed to load image: ${fullPath}`);
            reject(error);
          };
          
          img.src = process.env.PUBLIC_URL + '/' + fullPath;
        });
      } catch (error) {
        console.warn(`Continuing despite error loading ${imageUrls[i]}:`, error);
        setLoadingState(prev => ({ ...prev, imagesLoaded: i + 1 }));
      }
      
      // Small delay to prevent overwhelming the browser
      if (i < imageUrls.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }
  }, [addError]);

  const generateVideoThumbnails = useCallback(async (videoUrls) => {
    setLoadingState(prev => ({ ...prev, phase: 'thumbnails', totalVideos: videoUrls.length }));
    
    for (let i = 0; i < videoUrls.length; i++) {
      try {
        await new Promise((resolve) => {
          const video = document.createElement('video');
          video.muted = true;
          video.preload = 'metadata';
          video.crossOrigin = 'anonymous';
          
          video.onloadedmetadata = () => {
            video.currentTime = 0.5; // Seek to 0.5 seconds for thumbnail
          };
          
          video.onseeked = () => {
            try {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              
              if (ctx) {
                canvas.width = video.videoWidth || 640;
                canvas.height = video.videoHeight || 360;
                ctx.drawImage(video, 0, 0);
                
                const thumbnailDataUrl = canvas.toDataURL('image/jpeg', 0.7);
                
                // Store thumbnail in both state and sessionStorage
                setPreloadedAssets(prev => ({
                  ...prev,
                  thumbnails: new Map([...prev.thumbnails, [videoUrls[i], thumbnailDataUrl]])
                }));
                
                try {
                  sessionStorage.setItem(`thumbnail_${videoUrls[i]}`, thumbnailDataUrl);
                } catch (storageError) {
                  console.warn(`Could not store thumbnail in sessionStorage: ${storageError.message}`);
                }
                
                setLoadingState(prev => ({ ...prev, thumbnailsGenerated: i + 1 }));
                console.log(`✅ Thumbnail generated (${i + 1}/${videoUrls.length}): ${videoUrls[i]}`);
              }
            } catch (error) {
              addError(`Error generating thumbnail for ${videoUrls[i]}: ${error.message}`);
            }
            resolve();
          };
          
          video.onerror = () => {
            addError(`Failed to load video for thumbnail: ${videoUrls[i]}`);
            setLoadingState(prev => ({ ...prev, thumbnailsGenerated: i + 1 }));
            resolve();
          };
          
          // Timeout fallback
          setTimeout(() => {
            console.warn(`Timeout generating thumbnail for ${videoUrls[i]}`);
            setLoadingState(prev => ({ ...prev, thumbnailsGenerated: i + 1 }));
            resolve();
          }, 5000);
          
          video.src = process.env.PUBLIC_URL + videoUrls[i];
        });
      } catch (error) {
        console.error(`Error processing video ${videoUrls[i]}:`, error);
        setLoadingState(prev => ({ ...prev, thumbnailsGenerated: i + 1 }));
      }
      
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }, [addError]);

  const preloadVideos = useCallback(async (videoUrls) => {
    setLoadingState(prev => ({ ...prev, phase: 'videos' }));
    
    for (let i = 0; i < videoUrls.length; i++) {
      try {
        await new Promise((resolve) => {
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.muted = true;
          video.style.display = 'none';
          
          video.oncanplaythrough = () => {
            setPreloadedAssets(prev => ({
              ...prev,
              videos: new Set([...prev.videos, videoUrls[i]])
            }));
            setLoadingState(prev => ({ ...prev, videosLoaded: i + 1 }));
            console.log(`✅ Video preloaded (${i + 1}/${videoUrls.length}): ${videoUrls[i]}`);
            resolve();
          };
          
          video.onerror = () => {
            addError(`Failed to preload video: ${videoUrls[i]}`);
            setLoadingState(prev => ({ ...prev, videosLoaded: i + 1 }));
            resolve();
          };
          
          video.src = process.env.PUBLIC_URL + videoUrls[i];
          document.body.appendChild(video);
          
          // Clean up after loading
          setTimeout(() => {
            if (document.body.contains(video)) {
              document.body.removeChild(video);
            }
          }, 2000);
        });
      } catch (error) {
        addError(`Error preloading video ${videoUrls[i]}: ${error.message}`);
        setLoadingState(prev => ({ ...prev, videosLoaded: i + 1 }));
      }
      
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }, [addError]);

  const startProgressiveLoading = useCallback(async (config) => {
    const { 
      mainImages = [], 
      partImages = [], 
      videoUrls = [],
      folders = { main: '', parts: 'parts' }
    } = config;

    console.log('🚀 Starting enhanced progressive media loading...');
    
    try {
      // Phase 1: Load main images
      if (mainImages.length > 0) {
        console.log('📸 Phase 1: Loading main images...');
        await loadImageSequentially(mainImages, folders.main);
      }

      // Phase 2: Load part images
      if (partImages.length > 0) {
        console.log('🔧 Phase 2: Loading part images...');
        await loadImageSequentially(partImages, folders.parts);
      }

      // Phase 3: Generate video thumbnails
      if (videoUrls.length > 0) {
        console.log('🎬 Phase 3: Generating video thumbnails...');
        await generateVideoThumbnails(videoUrls);

        // Phase 4: Preload videos
        console.log('🎥 Phase 4: Preloading videos...');
        await preloadVideos(videoUrls);
      }

      setLoadingState(prev => ({ ...prev, phase: 'complete' }));
      console.log('🎉 Enhanced progressive loading completed!');
      
    } catch (error) {
      console.error('Error during progressive loading:', error);
      addError(`Progressive loading failed: ${error.message}`);
      setLoadingState(prev => ({ ...prev, phase: 'complete' }));
    }
  }, [loadImageSequentially, generateVideoThumbnails, preloadVideos, addError]);

  // Return loading state and control functions
  return {
    loadingState,
    preloadedAssets,
    startProgressiveLoading,
    
    // Convenience getters
    isLoading: loadingState.phase !== 'idle' && loadingState.phase !== 'complete',
    isComplete: loadingState.phase === 'complete',
    currentPhase: loadingState.phase,
    totalProgress: loadingState.imagesLoaded + loadingState.videosLoaded + loadingState.thumbnailsGenerated,
    errors: loadingState.errors,
    
    // Asset checkers
    isImageLoaded: (imagePath) => preloadedAssets.images.has(imagePath),
    isVideoLoaded: (videoPath) => preloadedAssets.videos.has(videoPath),
    getThumbnail: (videoPath) => preloadedAssets.thumbnails.get(videoPath) || sessionStorage.getItem(`thumbnail_${videoPath}`)
  };
};
