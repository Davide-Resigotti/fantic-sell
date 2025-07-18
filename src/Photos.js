import './Contents.css';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Photos() {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedMainPhotos, setLoadedMainPhotos] = useState(0);
  const [loadedParts, setLoadedParts] = useState(0);

  // Add state to store scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // All main images in order - adapted for fantic-sell media
  const allImages = useMemo(() => [
    'front-left.jpeg', 'front-right.jpeg', 'back-wheel-left.jpeg', 'back-wheel-right.jpeg',
    'rear-tyre.jpeg', 'IMG_3746.jpeg', 'IMG_3747.jpeg', 'IMG_3745.jpeg', 'front-brake.jpeg',
    'engine-left.jpeg', 'engine-right.jpeg', 'engine-closer.jpeg', 'down.jpeg', 'IMG_3731.jpeg',
    'IMG_3733.jpeg', 'IMG_3734.jpeg', 'IMG_3735.jpeg', 'IMG_3736.jpeg', 'IMG_3738.jpeg',
    'IMG_3739.jpeg', 'IMG_3740.jpeg', 'IMG_3741.jpeg', 'IMG_3742.jpeg', 'up.jpeg',
    'IMG_3743.jpeg', 'IMG_3748.jpeg', 'IMG_3750.jpeg', 'documents.jpeg', 'parts.jpeg'
  ], []);

  // Parts images - adapted for fantic-sell media
  const partImages = useMemo(() => [
    'IMG_3765.jpeg', 'IMG_3766.jpeg', 'IMG_3767.jpeg', 'IMG_3768.jpeg', 'IMG_3769.jpeg',
    'IMG_3770.jpeg', 'IMG_3773.jpeg', 'IMG_3774.jpeg', 'IMG_3775.jpeg', 'IMG_3776.jpeg',
    'IMG_3777.jpeg', 'IMG_3778.jpeg', 'IMG_3779.jpeg', 'IMG_3780.jpeg', 'IMG_3781.jpeg',
    'IMG_3782.jpeg', 'IMG_3783.jpeg', 'IMG_3784.jpeg', 'IMG_3785.jpeg', 'IMG_3786.jpeg',
    'IMG_3787.jpeg', 'IMG_3788.jpeg', 'IMG_3789.jpeg', 'IMG_3790.jpeg', 'IMG_3791.jpeg',
    'IMG_3792.jpeg', 'IMG_3793.jpeg', 'IMG_3794.jpeg', 'IMG_3795.jpeg', 'IMG_3796.jpeg',
    'IMG_3797.jpeg', 'IMG_3798.jpeg', 'IMG_3799.jpeg', 'IMG_3800.jpeg', 'IMG_3801.jpeg',
    'IMG_3802.jpeg', 'IMG_3803.jpeg', 'IMG_3804.jpeg', 'IMG_3805.jpeg', 'IMG_3806.jpeg',
    'IMG_3807.jpeg', 'IMG_3808.jpeg', 'IMG_3809.jpeg', 'IMG_3810.jpeg', 'IMG_3811.jpeg',
    'IMG_3812.jpeg', 'IMG_3813.jpeg', 'IMG_3814.jpeg'
  ], []);

  // Combined all images for navigation (main photos + parts)
  const combinedImages = useMemo(() => [
    ...allImages,
    ...partImages
  ], [allImages, partImages]);

  const photoImages = useMemo(() => allImages, [allImages]); // Main photos
  const mainPartImages = useMemo(() => partImages, [partImages]); // Parts

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
    let folder, newSrc;
    if (newIndex < allImages.length) {
      // Main photos folder (root public folder)
      newSrc = `${process.env.PUBLIC_URL}/${combinedImages[newIndex]}`;
    } else {
      // Parts folder
      folder = 'parts';
      const partIndex = newIndex - allImages.length;
      newSrc = `${process.env.PUBLIC_URL}/${folder}/${partImages[partIndex]}`;
    }

    setCurrentImageIndex(newIndex);
    setFullScreenImage(newSrc);
  };

  // Progressive loading: photos first, then parts, then videos (same logic as valenti-sell)
  useEffect(() => {
    const loadImagesSequentially = async () => {
      // Load main photos in order
      for (let i = 0; i < photoImages.length; i++) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedMainPhotos(i + 1);
              resolve();
            };
            img.onerror = reject;
            // Main photos are in public root for fantic-sell
            img.src = `${process.env.PUBLIC_URL}/${photoImages[i]}`;
          });
        } catch (error) {
          console.log(`Failed to load photo ${photoImages[i]}, continuing...`);
          setLoadedMainPhotos(i + 1); // Still increment to continue loading
        }
      }

      // After all main photos, load parts in order
      for (let i = 0; i < mainPartImages.length; i++) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedParts(i + 1);
              resolve();
            };
            img.onerror = reject;
            img.src = `${process.env.PUBLIC_URL}/parts/${mainPartImages[i]}`;
          });
        } catch (error) {
          console.log(`Failed to load part ${mainPartImages[i]}, continuing...`);
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
  }, [photoImages, mainPartImages]);

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
          index < loadedMainPhotos ? (
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
        {mainPartImages.map((filename, index) => (
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