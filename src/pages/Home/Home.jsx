import { useSelector } from 'react-redux';
import Rocket from '../../Components/Rocket/Rocket';
import Spinner from '../../Components/Spinner/Spinner';

const Rockets = () => {
  const { rockets, loading } = useSelector((state) => state.rocketReducer);

  return (
    <>
      {loading ? (
        <div className="h-screen overflow-hidden w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <ul className="grid grid-flow-row gap-8">
          {rockets.map((rocket) => (
            <Rocket key={rocket.id} rocket={rocket} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Rockets;
