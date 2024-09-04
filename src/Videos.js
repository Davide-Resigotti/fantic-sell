
import './Home.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { useState } from 'react';

function Videos() {


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
          <FaHome className='iconHome' />
        </Link>
        <h1 className='foto'>FOTO</h1>
      </div>
      <div className="projectRectangles" >
        <video audio controls className="rectangle-1" onClick={() => handleImageClick('/prova.MOV')}>
          <source src="/prova.MOV" type="video/MOV" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Videos