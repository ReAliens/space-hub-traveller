import { useSelector } from 'react-redux';

const Profile = () => {
  let { rockets } = useSelector((state) => state.rocketReducer);
  rockets = rockets.filter((rocket) => rocket.reserved);
  console.log(rockets);
  return (
    <div className="flex flex-col">
      <h1>Hello from my Profile page</h1>
      <ul className="text-lg bg-slate-400 font-bold">
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
