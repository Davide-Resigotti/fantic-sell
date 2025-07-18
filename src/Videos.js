import './Contents.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from 'react';

function Videos() {
  const [videoThumbnails, setVideoThumbnails] = useState({});

  const videoData = [
    { src: '/start.mp4', title: 'accensione' },
    { src: '/left-arrow.mp4', title: 'freccia sinistra' },
    { src: '/right-arrow.mp4', title: 'freccia destra' },
    { src: '/high-beam-headlights.mp4', title: 'abbaglianti' },
    { src: '/stop-light.mp4', title: 'luce stop' },
    { src: '/degassing.mp4', title: 'decompressione' },
    { src: '/engine-off.mp4', title: 'spegnimento motore' },
    { src: '/plate.mp4', title: 'targa' }
  ];

  useEffect(() => {
    // Load thumbnails from sessionStorage
    const thumbnails = {};
    videoData.forEach(video => {
      const storedThumbnail = sessionStorage.getItem(`thumbnail_${video.src}`);
      if (storedThumbnail) {
        thumbnails[video.src] = storedThumbnail;
      }
    });
    setVideoThumbnails(thumbnails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // We want this to run only once on mount


  return (
    <div className="projectsPage">

      <div className="projectTitle">
      <Link to="/">
        <FaHome className='iconHome' />
      </Link>
      <h2 className='foto'>VIDEO</h2>
      </div>
      <div className="projectRectangles" >
        {videoData.map((video, index) => (
          <video 
            key={index}
            title={video.title} 
            controls 
            preload="metadata" 
            className="rectangle"
            poster={videoThumbnails[video.src] || undefined}
          >
            <source src={process.env.PUBLIC_URL + video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <br />

      
    </div>
    )
}

export default Videos