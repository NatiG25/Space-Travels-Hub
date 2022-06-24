import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';
import NavLink from './components/NavLink';
import { fetchMission } from './components/redux/missions/missions';
import Rocket from './components/Rocket';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, []);

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
