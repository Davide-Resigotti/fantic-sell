import { useEffect, useState } from 'react';

export const useMediaPreload = () => {
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const [preloadedVideos, setPreloadedVideos] = useState(new Set());
  const [preloadedThumbnails, setPreloadedThumbnails] = useState(new Set());
  const [loadingPhase, setLoadingPhase] = useState('idle'); // 'idle', 'images', 'thumbnails', 'videos', 'complete'

  useEffect(() => {
    const imageUrls = [
      '/front-left.jpeg',
      '/front-right.jpeg', 
      '/back-wheel-left.jpeg',
      '/back-wheel-right.jpeg',
      '/rear-tyre.jpeg',
      '/IMG_3746.jpeg',
      '/IMG_3747.jpeg',
      '/IMG_3745.jpeg',
      '/front-brake.jpeg',
      '/engine-left.jpeg',
      '/engine-right.jpeg',
      '/engine-closer.jpeg',
      '/down.jpeg',
      '/IMG_3731.jpeg',
      '/IMG_3733.jpeg',
      '/IMG_3734.jpeg',
      '/IMG_3735.jpeg',
      '/IMG_3736.jpeg',
      '/IMG_3738.jpeg',
      '/IMG_3739.jpeg',
      '/IMG_3740.jpeg',
      '/IMG_3741.jpeg',
      '/IMG_3742.jpeg',
      '/up.jpeg',
      '/IMG_3743.jpeg',
      '/IMG_3748.jpeg',
      '/IMG_3750.jpeg',
      '/documents.jpeg',
      '/parts.jpeg',
      '/moto.jpg',
      '/subito.png',
      '/parts/IMG_3765.jpeg',
      '/parts/IMG_3766.jpeg',
      '/parts/IMG_3767.jpeg',
      '/parts/IMG_3768.jpeg',
      '/parts/IMG_3769.jpeg',
      '/parts/IMG_3770.jpeg',
      '/parts/IMG_3771.jpeg',
      '/parts/IMG_3772.jpeg',
      '/parts/IMG_3773.jpeg',
      '/parts/IMG_3774.jpeg',
      '/parts/IMG_3775.jpeg',
      '/parts/IMG_3776.jpeg',
      '/parts/IMG_3777.jpeg',
      '/parts/IMG_3778.jpeg',
      '/parts/IMG_3779.jpeg',
      '/parts/IMG_3780.jpeg',
      '/parts/IMG_3781.jpeg',
      '/parts/IMG_3782.jpeg',
      '/parts/IMG_3783.jpeg',
      '/parts/IMG_3784.jpeg',
      '/parts/IMG_3785.jpeg',
      '/parts/IMG_3786.jpeg',
      '/parts/IMG_3787.jpeg',
      '/parts/IMG_3788.jpeg',
      '/parts/IMG_3789.jpeg',
      '/parts/IMG_3790.jpeg',
      '/parts/IMG_3791.jpeg',
      '/parts/IMG_3792.jpeg',
      '/parts/IMG_3793.jpeg',
      '/parts/IMG_3794.jpeg',
      '/parts/IMG_3795.jpeg',
      '/parts/IMG_3796.jpeg',
      '/parts/IMG_3797.jpeg',
      '/parts/IMG_3798.jpeg',
      '/parts/IMG_3799.jpeg',
      '/parts/IMG_3800.jpeg',
      '/parts/IMG_3801.jpeg',
      '/parts/IMG_3802.jpeg',
      '/parts/IMG_3803.jpeg',
      '/parts/IMG_3804.jpeg',
      '/parts/IMG_3805.jpeg',
      '/parts/IMG_3806.jpeg',
      '/parts/IMG_3807.jpeg',
      '/parts/IMG_3808.jpeg',
      '/parts/IMG_3809.jpeg',
      '/parts/IMG_3810.jpeg',
      '/parts/IMG_3811.jpeg',
      '/parts/IMG_3812.jpeg',
      '/parts/IMG_3813.jpeg',
      '/parts/IMG_3814.jpeg'
    ];

    const videoUrls = [
      '/start.mp4',
      '/left-arrow.mp4',
      '/right-arrow.mp4',
      '/high-beam-headlights.mp4',
      '/stop-light.mp4',
      '/degassing.mp4',
      '/engine-off.mp4',
      '/plate.mp4'
    ];

    const startPreloading = async () => {
      console.log('🚀 Starting media preload sequence...');
      
      // Phase 1: Load images sequentially
      setLoadingPhase('images');
      console.log('📸 Phase 1: Loading images...');
      
      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setPreloadedImages(prev => new Set([...prev, url]));
              console.log(`✅ Image loaded (${i + 1}/${imageUrls.length}): ${url}`);
              resolve();
            };
            img.onerror = () => {
              console.error(`❌ Failed to load image: ${url}`);
              resolve(); // Continue even if image fails
            };
            img.src = process.env.PUBLIC_URL + url;
          });
        } catch (error) {
          console.error(`Error loading image ${url}:`, error);
        }
        
        // Small delay between images to not overwhelm browser
        if (i < imageUrls.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      }

      // Phase 2: Generate video thumbnails
      setLoadingPhase('thumbnails');
      console.log('🎬 Phase 2: Generating video thumbnails...');
      
      for (let i = 0; i < videoUrls.length; i++) {
        const url = videoUrls[i];
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
                
                if (!ctx) {
                  console.warn(`Canvas context not available for ${url}`);
                  setPreloadedThumbnails(prev => new Set([...prev, url]));
                  resolve();
                  return;
                }
                
                canvas.width = video.videoWidth || 640;
                canvas.height = video.videoHeight || 360;
                ctx.drawImage(video, 0, 0);
                
                // Store thumbnail as data URL
                const thumbnailDataUrl = canvas.toDataURL('image/jpeg', 0.7);
                setPreloadedThumbnails(prev => new Set([...prev, url]));
                console.log(`✅ Thumbnail generated (${i + 1}/${videoUrls.length}): ${url}`);
                
                // Store thumbnail in sessionStorage for later use
                try {
                  sessionStorage.setItem(`thumbnail_${url}`, thumbnailDataUrl);
                } catch (storageError) {
                  console.warn(`Could not store thumbnail in sessionStorage: ${storageError.message}`);
                }
                
                resolve();
              } catch (error) {
                console.error(`Error generating thumbnail for ${url}:`, error);
                setPreloadedThumbnails(prev => new Set([...prev, url]));
                resolve();
              }
            };
            
            video.onerror = () => {
              console.error(`❌ Failed to load video for thumbnail: ${url}`);
              resolve(); // Continue even if video fails
            };
            
            // Timeout fallback
            setTimeout(() => {
              console.warn(`Timeout generating thumbnail for ${url}`);
              setPreloadedThumbnails(prev => new Set([...prev, url]));
              resolve();
            }, 5000);
            
            video.src = process.env.PUBLIC_URL + url;
          });
        } catch (error) {
          console.error(`Error processing video ${url}:`, error);
        }
        
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Phase 3: Preload videos
      setLoadingPhase('videos');
      console.log('🎥 Phase 3: Preloading videos...');
      
      for (let i = 0; i < videoUrls.length; i++) {
        const url = videoUrls[i];
        try {
          await new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.preload = 'auto';
            video.muted = true;
            video.style.display = 'none';
            
            video.oncanplaythrough = () => {
              setPreloadedVideos(prev => new Set([...prev, url]));
              console.log(`✅ Video preloaded (${i + 1}/${videoUrls.length}): ${url}`);
              resolve();
            };
            
            video.onerror = () => {
              console.error(`❌ Failed to preload video: ${url}`);
              resolve(); // Continue even if video fails
            };
            
            video.src = process.env.PUBLIC_URL + url;
            document.body.appendChild(video);
            
            // Remove from DOM after loading
            setTimeout(() => {
              if (document.body.contains(video)) {
                document.body.removeChild(video);
              }
            }, 2000);
          });
        } catch (error) {
          console.error(`Error preloading video ${url}:`, error);
        }
        
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      setLoadingPhase('complete');
      console.log('🎉 All media preloaded successfully!');
    };

    // Start preloading after 1 second
    const timeoutId = setTimeout(startPreloading, 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return {
    preloadedImages,
    preloadedVideos,
    preloadedThumbnails,
    loadingPhase,
    totalPreloaded: preloadedImages.size + preloadedVideos.size + preloadedThumbnails.size,
    imagesLoaded: preloadedImages.size,
    videosLoaded: preloadedVideos.size,
    thumbnailsLoaded: preloadedThumbnails.size
  };
};
