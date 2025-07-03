import './Contents.css';
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
      <h2 >FOTO</h2>
    </div>
    <div className="projectRectangles">
      <img src={process.env.PUBLIC_URL + '/front-left.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/front-left.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/front-right.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/front-right.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/back-wheel-left.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/back-wheel-left.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/back-wheel-right.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/back-wheel-right.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/rear-tyre.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/rear-tyre.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3746.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3746.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3747.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3747.jpeg')} loading="lazy" />  
      <img src={process.env.PUBLIC_URL + '/IMG_3745.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3745.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/front-brake.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/front-brake.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/engine-left.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/engine-left.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/engine-right.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/engine-right.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/engine-closer.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/engine-closer.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/down.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/down.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3731.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3731.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3733.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3733.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3734.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3734.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3735.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3735.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3736.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3736.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3738.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3738.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3739.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3739.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3740.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3740.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3741.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3741.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3742.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3742.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/up.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/up.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3743.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3743.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3748.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3748.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/IMG_3750.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/IMG_3750.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/documents.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/documents.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts.jpeg')} loading="lazy" />
    </div>


    <div className='parte'>
      <h2>⬇️⬇️PEZZI VENDUTI A PARTE⬇️⬇️</h2>
      <h1>se comprati con la moto tutto a .... (da decidere)</h1>
    </div>

      <div className="projectRectangles">
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3765.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3765.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3766.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3766.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3767.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3767.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3768.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3768.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3769.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3769.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3770.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3770.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3773.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3773.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3774.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3774.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3775.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3775.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3776.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3776.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3777.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3777.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3778.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3778.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3779.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3779.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3780.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3780.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3781.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3781.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3782.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3782.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3783.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3783.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3784.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3784.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3785.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3785.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3786.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3786.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3787.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3787.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3788.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3788.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3789.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3789.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3790.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3790.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3791.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3791.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3792.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3792.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3793.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3793.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3794.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3794.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3795.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3795.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3796.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3796.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3797.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3797.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3798.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3798.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3799.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3799.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3800.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3800.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3801.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3801.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3802.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3802.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3803.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3803.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3804.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3804.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3805.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3805.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3806.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3806.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3807.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3807.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3808.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3808.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3809.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3809.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3810.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3810.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3811.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3811.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3812.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3812.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3813.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3813.jpeg')} loading="lazy" />
      <img src={process.env.PUBLIC_URL + '/parts/IMG_3814.jpeg'} alt="" className="rectangle" onClick={() => handleImageClick(process.env.PUBLIC_URL + '/parts/IMG_3814.jpeg')} loading="lazy" />
      <br />
    </div>
    <br />
    </div>
  );
}

export default Photos;