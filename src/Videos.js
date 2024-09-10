
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
      <video alt="accensione" controls audio className="rectangle" >
        <source src="./start.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" >
        <source src="./left-arrow.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" >
        <source src="./right-arrow.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" >
        <source src="./high-beam-headlights.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" >
        <source src="./stop-light.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" >
        <source src="./degassing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" >
        <source src="./engine-off.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video controls audio className="rectangle" >
        <source src="./plate.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      </div>
      <br />

      
    </div>
    )
}

export default Videos