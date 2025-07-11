import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Photos from './Photos';
import Videos from './Videos';
import Contacts from './Contacts';
import Info from './Info';
import { useMediaPreload } from './hooks/useMediaPreload';

const App = () => {
  // Inizia il preload di video e immagini quando l'app si carica
  const { totalPreloaded } = useMediaPreload();
  
  // Optional: mostra progress in console
  React.useEffect(() => {
    if (totalPreloaded > 0) {
      console.log(`Media preloaded: ${totalPreloaded} files`);
    }
  }, [totalPreloaded]);

  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;

