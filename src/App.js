import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import NavLink from './components/NavLink';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
