import { useEffect, useState } from 'react';

export const useImagePreload = () => {
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  
  useEffect(() => {
    const imageUrls = [
      // Immagini principali
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
      // Immagini parts
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

    const preloadImages = () => {
      // Precarica le prime immagini più importanti subito
      const priorityImages = imageUrls.slice(0, 10);
      const otherImages = imageUrls.slice(10);

      // Preload immagini prioritarie
      priorityImages.forEach((url, index) => {
        setTimeout(() => {
          const img = new Image();
          img.src = process.env.PUBLIC_URL + url;
          
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, url]));
            console.log(`Priority image preloaded: ${url}`);
          };

          img.onerror = () => {
            console.error(`Failed to preload priority image: ${url}`);
          };
        }, index * 100); // 100ms tra ogni immagine prioritaria
      });

      // Preload altre immagini con più ritardo
      otherImages.forEach((url, index) => {
        setTimeout(() => {
          const img = new Image();
          img.src = process.env.PUBLIC_URL + url;
          
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, url]));
            console.log(`Image preloaded: ${url}`);
          };

          img.onerror = () => {
            console.error(`Failed to preload image: ${url}`);
          };
        }, 2000 + (index * 200)); // Inizia dopo 2s, 200ms tra ogni immagine
      });
    };

    // Inizia il preload dopo 1 secondo per non rallentare il caricamento iniziale
    const timeoutId = setTimeout(preloadImages, 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return { preloadedImages };
};
