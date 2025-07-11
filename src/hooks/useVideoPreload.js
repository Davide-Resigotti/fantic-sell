import { useEffect, useState } from 'react';

export const useVideoPreload = () => {
  const [preloadedVideos, setPreloadedVideos] = useState(new Set());
  
  useEffect(() => {
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

    const preloadVideos = () => {
      videoUrls.forEach((url, index) => {
        // Ritarda il caricamento di ogni video per non sovraccaricare la banda
        setTimeout(() => {
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.muted = true;
          video.src = process.env.PUBLIC_URL + url;
          
          // Nascondi il video
          video.style.display = 'none';
          video.style.position = 'absolute';
          video.style.top = '-9999px';
          
          document.body.appendChild(video);
          
          video.addEventListener('loadedmetadata', () => {
            setPreloadedVideos(prev => new Set([...prev, url]));
            console.log(`Video preloaded: ${url}`);
          });

          video.addEventListener('error', () => {
            console.error(`Failed to preload video: ${url}`);
          });

          // Rimuovi il video dal DOM dopo il preload
          video.addEventListener('loadeddata', () => {
            setTimeout(() => {
              if (document.body.contains(video)) {
                document.body.removeChild(video);
              }
            }, 1000);
          });
        }, index * 500); // Ritarda di 500ms tra ogni video
      });
    };

    // Inizia il preload dopo 2 secondi per non rallentare il caricamento iniziale
    const timeoutId = setTimeout(preloadVideos, 2000);
    
    return () => {
      clearTimeout(timeoutId);
      // Cleanup: rimuovi eventuali video rimasti nel DOM
      const hiddenVideos = document.querySelectorAll('video[style*="position: absolute"]');
      hiddenVideos.forEach(video => {
        if (document.body.contains(video)) {
          document.body.removeChild(video);
        }
      });
    };
  }, []);

  return { preloadedVideos };
};
