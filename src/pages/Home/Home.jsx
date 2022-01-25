import { useSelector } from 'react-redux';
import Rocket from '../../Components/Rocket/Rocket';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocketReducer);

  return (
    <ul className="grid grid-flow-row gap-8 p-10 ">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};

export default Rockets;
