import './Contents.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Videos() {


  return (
    <div className="projectsPage">

      <div className="projectTitle">
      <Link to="/">
        <FaHome className='iconHome' />
      </Link>
      <h2 className='foto'>VIDEO</h2>
      </div>
      <div className="projectRectangles" >
      <video title="accensione" controls audio className="rectangle" >
        <source src={process.env.PUBLIC_URL + '/start.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video title="freccia sinistra" controls audio className="rectangle" >
        <source src={process.env.PUBLIC_URL + '/left-arrow.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video title="freccia destra" controls audio className="rectangle" >
        <source src={process.env.PUBLIC_URL + '/right-arrow.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video title="abbaglianti" controls audio className="rectangle" >
        <source src={process.env.PUBLIC_URL + '/high-beam-headlights.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video title="luce stop" controls audio className="rectangle" >
        <source src={process.env.PUBLIC_URL + '/stop-light.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video title="decompressione" controls audio className="rectangle" >
        <source src={process.env.PUBLIC_URL + '/degassing.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video title="spegnimento motore" controls audio className="rectangle" >
        <source src={process.env.PUBLIC_URL + '/engine-off.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video title="targa" controls audio className="rectangle" >
        <source src={process.env.PUBLIC_URL + '/plate.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
      <br />

      
    </div>
    )
}

export default Videos