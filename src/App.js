import { BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Components/Header/Header';
import AppRoutes from './routes/routes';
import loadRockets from './redux/rockets/utils';
import { fetchMissions } from './redux/missions/missionsActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRockets());
    dispatch(fetchMissions());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
