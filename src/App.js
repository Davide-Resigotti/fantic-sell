import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Photos from './Photos';
import Videos from './Videos';
import Contacts from './Contacts';
import Info from './Info';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;



// import React from 'react';
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './Home';
// import Photos from './Photos';
// import Videos from './Videos';
// import Contacts from './Contacts';
// import Info from './Info';

// const App = () => {
//   return (
//     <Router> 
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/photos" element={<Photos />} />
//         <Route path="/videos" element={<Videos />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/info" element={<Info />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

