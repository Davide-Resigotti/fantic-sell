
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
        <video controls audio  className="rectangle-1" >
          <source src="./prova.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video controls audio  className="rectangle-1" >
          <source src="./prova.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Videos