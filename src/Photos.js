
import './Home.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Photos() {

    const [fullScreenImage, setFullScreenImage] = useState(null);

    const handleImageClick = (src) => {
      setFullScreenImage(src);
    };
  
    const handleCloseFullScreen = () => {
      setFullScreenImage(null);
    };
  

  return (
    <div className="projectsPage">
          {fullScreenImage && (
        <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
          <img src={fullScreenImage} alt="Full Screen" className="full-screen-image" />
        </div>
      )}
    <div className="projectTitle">
      <Link to="/">
      <FaHome className='iconHome'/>
      </Link>
      <h1 className='foto'>FOTO</h1>
    </div>
    <div className="projectRectangles">
      <img src="/front-left.jpeg" alt="" className="rectangle-1" onClick={() => handleImageClick('/front-left.jpeg')} />
      <img src="/front-right.jpeg" alt="" className="rectangle-2" onClick={() => handleImageClick('/front-right.jpeg')} />
      <img src="/back-wheel-left.jpeg" alt="" className="rectangle-3" onClick={() => handleImageClick('/back-wheel-left.jpeg')} />
      <img src="/back-wheel-right.jpeg" alt="" className="rectangle-4" onClick={() => handleImageClick('/back-wheel-right.jpeg')} />
      <img src="/engine-left.jpeg" alt="" className="rectangle-5" onClick={() => handleImageClick('/engine-left.jpeg')} />
      <img src="/engine-right.jpeg" alt="" className="rectangle-6" onClick={() => handleImageClick('/engine-right.jpeg')} />
      <img src="/down.jpeg" alt="" className="rectangle-7" onClick={() => handleImageClick('/down.jpeg')} />
      <img src="/up.jpeg" alt="" className="rectangle-8" onClick={() => handleImageClick('/up.jpeg')} />
      <img src="/parts.jpeg" alt="" className="rectangle-9" onClick={() => handleImageClick('/parts.jpeg')} />
      <img src="/documents.jpeg" alt="" className="rectangle-10" onClick={() => handleImageClick('/documents.jpeg')} />



    </div>
  </div>
  )
}

export default Photos