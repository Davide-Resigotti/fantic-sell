import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Photos from './Photos';
import Videos from './Videos';
import Contacts from './Contacts';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}> 
      <Routes>
        <Route path="/fantic-sell" element={<Home />} />
        <Route path="/fantic-sell/photos" element={<Photos />} />
        <Route path="/fantic-sell/videos" element={<Videos />} />
        <Route path="/fantic-sell/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;
