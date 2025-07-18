import React, { useState, useEffect } from 'react';

const VideoThumbnail = ({ videoSrc, title, className }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if thumbnail is available in sessionStorage
    const storedThumbnail = sessionStorage.getItem(`thumbnail_${videoSrc}`);
    if (storedThumbnail) {
      setThumbnail(storedThumbnail);
      setIsLoading(false);
    } else {
      // If no thumbnail, still show a placeholder
      setTimeout(() => setIsLoading(false), 2000);
    }
  }, [videoSrc]);

  const handleClick = () => {
    setShowVideo(true);
  };

  if (showVideo) {
    return (
      <video title={title} controls preload="metadata" className={className}>
        <source src={process.env.PUBLIC_URL + videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <div className={`video-thumbnail-container ${className}`} onClick={handleClick}>
      {isLoading ? (
        <div className="thumbnail-loading">
          <p>Caricamento preview...</p>
        </div>
      ) : thumbnail ? (
        <>
          <img 
            src={thumbnail} 
            alt={title}
            className="video-thumbnail"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="play-button-overlay">
            <div className="play-button">▶</div>
          </div>
        </>
      ) : (
        <div className="thumbnail-loading">
          <div style={{ textAlign: 'center' }}>
            <p>📹 {title}</p>
            <small>Click per riprodurre</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;
