import { useSelector } from 'react-redux';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocketReducer);

  return (
    <ul className="flex flex-col gap-8">
      {rockets.map((rocket) => (
        <li key={rocket.id} className="h-[12rem] flex gap-10">
          <div className="w-[20%]">
            <img src={rocket.images[0]} alt={rocket.name} className="object-fit  h-full w-full" />
          </div>
          <div className="w-[60%] flex flex-col gap-3">
            <h1 className="text-lg font-bold">
              {rocket.name}
            </h1>
            <p className="description">
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-[#18a2b8] rounded mr-6">
                Reserved
              </span>
              <span>
                {rocket.description}
              </span>
            </p>
            <button type="button" className=" p-2 rounded text-indigo-100 bg-blue-700 hover:bg-blue-400 w-40">
              Reserve Rocket
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
