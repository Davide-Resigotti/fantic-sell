
import './Home.css'; // Assicurati di avere il CSS per lo stile
import './buttons.css';
import { Link } from 'react-router-dom';


const Home = () => {
 
  return (
    
    <div className="home">


      <div className="first-page">
        <p className="text-1">
          Fantic 50 Casa 2018
        </p>
        <div className="buttons">
        <Link to="/photos">
            <button>FOTO</button>
          </Link>
          <Link to="/videos">
            <button>VIDEO</button>
          </Link>
          <Link to="/info">
            <button>INFO</button>
          </Link>
          <Link to="/contacts">
            <button>CONTATTI</button>
          </Link>
        </div>


        <p className="text-2">
          qualsiasi tipo di informazione o foto o video potete trovarla qui
        </p>

    
      </div>
      
    </div>
  );
};

export default Home;