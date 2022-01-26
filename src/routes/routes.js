import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Rockets from '../pages/Home/Home';
import Missions from '../pages/Missions/Missions';
import Profile from '../pages/Profile/Profile';

const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/missions" element={<Missions />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
