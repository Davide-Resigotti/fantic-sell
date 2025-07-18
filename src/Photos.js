import './Contents.css';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Photos() {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedPhotos, setLoadedPhotos] = useState(0);
  const [loadedParts, setLoadedParts] = useState(0);

  // Add state to store scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // All images in order - adapted for fantic-sell media (WebP only)
  const allImages = useMemo(() => [
    'front-left.webp', 'front-right.webp', 'back-wheel-left.webp', 'back-wheel-right.webp',
    'rear-tyre.webp', 'IMG_3746.webp', 'IMG_3747.webp', 'IMG_3745.webp', 'front-brake.webp',
    'engine-left.webp', 'engine-right.webp', 'engine-closer.webp', 'down.webp', 'IMG_3731.webp',
    'IMG_3733.webp', 'IMG_3734.webp', 'IMG_3735.webp', 'IMG_3736.webp', 'IMG_3738.webp',
    'IMG_3739.webp', 'IMG_3740.webp', 'IMG_3741.webp', 'IMG_3742.webp', 'up.webp',
    'IMG_3743.webp', 'IMG_3748.webp', 'IMG_3750.webp', 'documents.webp', 'parts.webp',
    // Parts images - adapted for fantic-sell media (WebP only)
    'IMG_3765.webp', 'IMG_3766.webp', 'IMG_3767.webp', 'IMG_3768.webp', 'IMG_3769.webp',
    'IMG_3770.webp', 'IMG_3771.webp', 'IMG_3772.webp', 'IMG_3773.webp', 'IMG_3774.webp',
    'IMG_3775.webp', 'IMG_3776.webp', 'IMG_3777.webp', 'IMG_3778.webp', 'IMG_3779.webp',
    'IMG_3780.webp', 'IMG_3781.webp', 'IMG_3782.webp', 'IMG_3783.webp', 'IMG_3784.webp',
    'IMG_3785.webp', 'IMG_3786.webp', 'IMG_3787.webp', 'IMG_3788.webp', 'IMG_3789.webp',
    'IMG_3790.webp', 'IMG_3791.webp', 'IMG_3792.webp', 'IMG_3793.webp', 'IMG_3794.webp',
    'IMG_3795.webp', 'IMG_3796.webp', 'IMG_3797.webp', 'IMG_3798.webp', 'IMG_3799.webp',
    'IMG_3800.webp', 'IMG_3801.webp', 'IMG_3802.webp', 'IMG_3803.webp', 'IMG_3804.webp',
    'IMG_3805.webp', 'IMG_3806.webp', 'IMG_3807.webp', 'IMG_3808.webp', 'IMG_3809.webp',
    'IMG_3810.webp', 'IMG_3811.webp', 'IMG_3812.webp', 'IMG_3813.webp', 'IMG_3814.webp'
  ], []);

  // Combined all images for navigation (photos + parts)
  const combinedImages = useMemo(() => allImages, [allImages]);

  const photoImages = useMemo(() => allImages.slice(0, 29), [allImages]); // First 29 are main photos
  const partImages = useMemo(() => allImages.slice(29), [allImages]); // Rest are parts

  const handleImageClick = (src) => {
    const filename = src.split('/').pop();
    const index = combinedImages.indexOf(filename);
    setCurrentImageIndex(index);
    setFullScreenImage(src);

    // Store current scroll position
    setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);

    // Prevent body scroll on mobile
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollPosition}px`;
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);

    // Restore body scroll
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';

    // Restore scroll position
    window.scrollTo(0, scrollPosition);
  };

  const handleNavigation = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % combinedImages.length;
    } else {
      newIndex = currentImageIndex === 0 ? combinedImages.length - 1 : currentImageIndex - 1;
    }

    // Determine which folder the image is in - adapted for fantic-sell structure
    let newSrc;
    if (newIndex < 29) {
      // Main photos folder (root public folder)
      newSrc = `${process.env.PUBLIC_URL}/${combinedImages[newIndex]}`;
    } else {
      // Parts folder
      const partIndex = newIndex - 29;
      const filename = partImages[partIndex];
      newSrc = `${process.env.PUBLIC_URL}/parts/${filename}`;
    }

    setCurrentImageIndex(newIndex);
    setFullScreenImage(newSrc);
  };

  // Progressive loading: photos first, then parts, then videos (same logic as valenti-sell)
  useEffect(() => {
    const loadImagesSequentially = async () => {
      // Load photos in order
      for (let i = 0; i < photoImages.length; i++) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedPhotos(i + 1);
              resolve();
            };
            img.onerror = reject;
            // Main photos are in public root for fantic-sell
            img.src = `${process.env.PUBLIC_URL}/${photoImages[i]}`;
          });
        } catch (error) {
          console.log(`Failed to load photo ${photoImages[i]}, continuing...`);
          setLoadedPhotos(i + 1); // Still increment to continue loading
        }
      }

      // After all photos, load parts in order
      for (let i = 0; i < partImages.length; i++) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedParts(i + 1);
              resolve();
            };
            img.onerror = reject;
            img.src = `${process.env.PUBLIC_URL}/parts/${partImages[i]}`;
          });
        } catch (error) {
          console.log(`Failed to load part ${partImages[i]}, continuing...`);
          setLoadedParts(i + 1); // Still increment to continue loading
        }
      }

      // After all images, start video thumbnails (adapted for fantic-sell videos)
      setTimeout(() => {
        const videoThumbnails = [
          'start.mp4', 'left-arrow.mp4', 'right-arrow.mp4', 'high-beam-headlights.mp4',
          'stop-light.mp4', 'degassing.mp4', 'engine-off.mp4', 'plate.mp4'
        ];

        videoThumbnails.forEach(filename => {
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
                
                // Store thumbnail as data URL
                const thumbnailDataUrl = canvas.toDataURL('image/jpeg', 0.7);
                
                // Store thumbnail in sessionStorage for Videos component
                try {
                  sessionStorage.setItem(`thumbnail_/${filename}`, thumbnailDataUrl);
                } catch (storageError) {
                  console.warn(`Could not store thumbnail in sessionStorage: ${storageError.message}`);
                }
              }
            } catch (error) {
              console.error(`Error generating thumbnail for ${filename}:`, error);
            }
          };
          
          video.onerror = () => {
            console.error(`Failed to load video for thumbnail: ${filename}`);
          };
          
          video.src = `${process.env.PUBLIC_URL}/${filename}`;
        });

        // Finally videos
        setTimeout(() => {
          const videoFiles = [
            'start.mp4', 'left-arrow.mp4', 'right-arrow.mp4', 'high-beam-headlights.mp4',
            'stop-light.mp4', 'degassing.mp4', 'engine-off.mp4', 'plate.mp4'
          ];

          videoFiles.forEach(filename => {
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.src = `${process.env.PUBLIC_URL}/${filename}`;
          });
        }, 500);
      }, 500);
    };

    // Start progressive loading after component mounts
    const timer = setTimeout(loadImagesSequentially, 100);
    return () => clearTimeout(timer);
  }, [photoImages, partImages]);

  return (
    <div className="projectsPage">
      {fullScreenImage && (
        <div
          className="full-screen-overlay"
          onClick={handleCloseFullScreen}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            e.currentTarget.touchStartX = touch.clientX;
            e.currentTarget.touchStartY = touch.clientY;
          }}
          onTouchEnd={(e) => {
            const touch = e.changedTouches[0];
            const diffX = e.currentTarget.touchStartX - touch.clientX;
            const diffY = e.currentTarget.touchStartY - touch.clientY;

            // Only swipe if horizontal movement is greater than vertical and significant
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
              e.preventDefault();
              if (diffX > 0) {
                handleNavigation('next');
              } else {
                handleNavigation('prev');
              }
            }
          }}
        >
          <div className="full-screen-container">
            <button className="nav-btn nav-btn-left" onClick={(e) => {
              e.stopPropagation();
              handleNavigation('prev');
            }}>
              &#8249;
            </button>

            <img
              src={fullScreenImage}
              alt="Full Screen"
              className="full-screen-image"
              onClick={(e) => e.stopPropagation()}
            />

            <button className="nav-btn nav-btn-right" onClick={(e) => {
              e.stopPropagation();
              handleNavigation('next');
            }}>
              &#8250;
            </button>
          </div>
        </div>
      )}
      <div className="projectTitle">
        <Link to="/">
          <FaHome className='iconHome' />
        </Link>
        <h2>FOTO</h2>
      </div>
      <div className="projectRectangles">
        {photoImages.map((filename, index) => (
          index < loadedPhotos ? (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/${filename}`}
              alt=""
              className="rectangle"
              loading="eager"
              onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/${filename}`)}
            />
          ) : (
            <div
              key={index}
              className="rectangle"
              style={{
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '12px'
              }}
            >
              Loading...
            </div>
          )
        ))}
      </div>

      <div className='parte'>
        <h2>⬇️⬇️PEZZI VENDUTI A PARTE⬇️⬇️</h2>
        <h1>se comprati con la moto tutto a .... (da decidere)</h1>
      </div>

      <div className="projectRectangles">
        {partImages.map((filename, index) => (
          index < loadedParts ? (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/parts/${filename}`}
              alt=""
              className="rectangle"
              onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/${filename}`)}
            />
          ) : (
            <div
              key={index}
              className="rectangle"
              style={{
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '12px'
              }}
            >
              Loading...
            </div>
          )
        ))}
      </div>
      <br />
    </div>
  );
}

export default Photos;