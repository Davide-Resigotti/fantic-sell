import React from "react";
import "./Home.css"




export const Home = () => {
  return (
    <div className="home">
      <div className="first-page">
        <p className="text-1">
          Fantic 50 Casa 2018
        </p>
        <p className="text-2">
          qualsiasi tipo di informazione o foto o video potete trovarla qui
        </p>
      </div>
      <div className="projectsPage">
        <div className="projectTitle">
          <h1>FOTO</h1>
        </div>
        <div className="projectRectangles">
          <div className="rectangle-1" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
        </div>
      </div>

      <div className="spacer" />

      <div className="adv">
        <div className="advertisement-text">advertisement</div>
      </div>

      <div className="spacer" />

      

      <div className="projectsPage">
        <div className="projectTitle">
          <h1>RECENTS</h1>
        </div>

        <div className="projectRectangles">
          <div className="rectangle-1" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
        </div>
      </div>

      <div className="spacer" />

      <div className="adv">
        <div className="advertisement-text">advertisement</div>
      </div>
    </div>
  );
};






export default Home;


