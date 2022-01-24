import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocketReducer);

  return (
    <ul className="flex flex-col gap-8">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};

export default Rockets;
