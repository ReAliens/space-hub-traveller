import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BreakpointProvider } from 'react-socks';
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
    <BreakpointProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </BreakpointProvider>
  );
}

export default App;
