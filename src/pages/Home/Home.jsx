import { useSelector } from 'react-redux';
import Rocket from '../../Components/Rocket/Rocket';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocketReducer);

  return (
    <ul className="flex flex-col gap-8 p-10 mt-11">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};

export default Rockets;
