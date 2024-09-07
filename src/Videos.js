
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
      <h1 className='foto'>VIDEO</h1>
      </div>
      <div className="projectRectangles" >
      <video alt="accensione" controls audio className="rectangle" preload="metadata">
        <source src="./start.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" preload="metadata">
        <source src="./left-arrow.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" preload="metadata">
        <source src="./right-arrow.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" preload="metadata">
        <source src="./high-beam-headlights.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" preload="metadata">
        <source src="./stop-light.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" preload="metadata">
        <source src="./degassing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" preload="metadata">
        <source src="./engine-off.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" preload="metadata">
        <source src="./plate.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
    )
}

export default Videos