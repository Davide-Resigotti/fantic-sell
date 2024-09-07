
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
      <h1 >FOTO</h1>
    </div>
    <div className="projectRectangles">
      <img src="./front-left.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./front-left.jpeg')} />
      <img src="./front-right.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./front-right.jpeg')} />
      <img src="./back-wheel-left.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./back-wheel-left.jpeg')} />
      <img src="./back-wheel-right.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./back-wheel-right.jpeg')} />
      <img src="./rear-tyre.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./rear-tyre.jpeg')} />
      <img src="./IMG_3746.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3746.jpeg')} />
      <img src="./IMG_3747.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3747.jpeg')} />  
      <img src="./IMG_3745.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3745.jpeg')} />
      <img src="./front-brake.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./front-brake.jpeg')} />
      <img src="./engine-left.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./engine-left.jpeg')} />
      <img src="./engine-right.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./engine-right.jpeg')} />
      <img src="./engine-closer.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./engine-closer.jpeg')} />
      <img src="./down.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./down.jpeg')} />
      <img src="./IMG_3731.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3731.jpeg')} />
      <img src="./IMG_3733.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3733.jpeg')} />
      <img src="./IMG_3734.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3734.jpeg')} />
      <img src="./IMG_3735.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3735.jpeg')} />
      <img src="./IMG_3736.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3736.jpeg')} />
      <img src="./IMG_3738.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3738.jpeg')} />
      <img src="./IMG_3739.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3739.jpeg')} />
      <img src="./IMG_3740.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3740.jpeg')} />
      <img src="./IMG_3741.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3741.jpeg')} />
      <img src="./IMG_3742.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3742.jpeg')} />
      <img src="./up.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./up.jpeg')} />
      <img src="./IMG_3743.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3743.jpeg')} />
      <img src="./IMG_3748.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3748.jpeg')} />
      <img src="./IMG_3750.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./IMG_3750.jpeg')} />
      <img src="./documents.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./documents.jpeg')} />
      <img src="./parts.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts.jpeg')} />

    </div>


    <div>
      <h2>⬇️⬇️PEZZI VENDUTI A PARTE⬇️⬇️</h2>
      <h1>se comprati con la moto tutto a .... (da decidere)</h1>
    </div>

      <div className="projectRectangles">
      <img src="./parts/IMG_3762.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3762.jpeg')} />
      <img src="./parts/IMG_3763.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3763.jpeg')} />
      <img src="./parts/IMG_3764.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3764.jpeg')} />
      <img src="./parts/IMG_3765.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3765.jpeg')} />
      <img src="./parts/IMG_3766.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3766.jpeg')} />
      <img src="./parts/IMG_3767.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3767.jpeg')} />
      <img src="./parts/IMG_3768.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3768.jpeg')} />
      <img src="./parts/IMG_3769.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3769.jpeg')} />
      <img src="./parts/IMG_3770.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3770.jpeg')} />
      <img src="./parts/IMG_3771.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3771.jpeg')} />
      <img src="./parts/IMG_3772.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3772.jpeg')} />
      <img src="./parts/IMG_3773.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3773.jpeg')} />
      <img src="./parts/IMG_3774.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3774.jpeg')} />
      <img src="./parts/IMG_3775.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3775.jpeg')} />
      <img src="./parts/IMG_3776.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3776.jpeg')} />
      <img src="./parts/IMG_3777.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3777.jpeg')} />
      <img src="./parts/IMG_3778.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3778.jpeg')} />
      <img src="./parts/IMG_3779.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3779.jpeg')} />
      <img src="./parts/IMG_3780.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3780.jpeg')} />
      <img src="./parts/IMG_3781.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3781.jpeg')} />
      <img src="./parts/IMG_3782.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3782.jpeg')} />
      <img src="./parts/IMG_3783.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3783.jpeg')} />
      <img src="./parts/IMG_3784.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3784.jpeg')} />
      <img src="./parts/IMG_3785.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3785.jpeg')} />
      <img src="./parts/IMG_3786.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3786.jpeg')} />
      <img src="./parts/IMG_3787.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3787.jpeg')} />
      <img src="./parts/IMG_3788.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3788.jpeg')} />
      <img src="./parts/IMG_3789.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3789.jpeg')} />
      <img src="./parts/IMG_3790.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3790.jpeg')} />
      <img src="./parts/IMG_3791.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3791.jpeg')} />
      <img src="./parts/IMG_3792.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3792.jpeg')} />
      <img src="./parts/IMG_3793.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3793.jpeg')} />
      <img src="./parts/IMG_3794.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3794.jpeg')} />
      <img src="./parts/IMG_3795.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3795.jpeg')} />
      <img src="./parts/IMG_3796.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3796.jpeg')} />
      <img src="./parts/IMG_3797.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3797.jpeg')} />
      <img src="./parts/IMG_3798.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3798.jpeg')} />
      <img src="./parts/IMG_3799.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3799.jpeg')} />
      <img src="./parts/IMG_3800.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3800.jpeg')} />
      <img src="./parts/IMG_3801.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3801.jpeg')} />
      <img src="./parts/IMG_3802.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3802.jpeg')} />
      <img src="./parts/IMG_3803.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3803.jpeg')} />
      <img src="./parts/IMG_3804.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3804.jpeg')} />
      <img src="./parts/IMG_3805.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3805.jpeg')} />
      <img src="./parts/IMG_3806.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3806.jpeg')} />
      <img src="./parts/IMG_3807.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3807.jpeg')} />
      <img src="./parts/IMG_3808.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3808.jpeg')} />
      <img src="./parts/IMG_3809.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3809.jpeg')} />
      <img src="./parts/IMG_3810.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3810.jpeg')} />
      <img src="./parts/IMG_3811.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3811.jpeg')} />
      <img src="./parts/IMG_3812.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3812.jpeg')} />
      <img src="./parts/IMG_3813.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3813.jpeg')} />
      <img src="./parts/IMG_3814.jpeg" alt="" className="rectangle" onClick={() => handleImageClick('./parts/IMG_3814.jpeg')} />

    </div>
  </div>
  )
}

export default Photos