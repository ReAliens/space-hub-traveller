import { useSelector } from 'react-redux';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocketReducer);

  return (
    <ul>
      {rockets.map((rocket) => (
        <li key={rocket.id}>
          {rocket.name}
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
