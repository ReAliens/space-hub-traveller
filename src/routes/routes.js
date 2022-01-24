import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Rockets from '../pages/Home/Home';
import Missions from '../pages/Missions/Missions';
import Profile from '../pages/Profile/Profile';

const AppRoutes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
