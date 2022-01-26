import { BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './Components/Layout/Layout';
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
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
