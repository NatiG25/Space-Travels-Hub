import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import NavLink from './components/NavLink';
import Rocket from './components/Rocket';

function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/" element={<Rocket />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
