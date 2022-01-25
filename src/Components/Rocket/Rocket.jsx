import PropTypes from 'prop-types';
import ReservationBtn from './ReserveBtn';

const Rocket = (props) => {
  const { rocket } = props;
  const {
    id, name, description, reserved, images,
  } = rocket;

  return (
    <li className="h-[12rem] flex gap-10">
      <div className="w-[20%]">
        <img src={images[0]} alt={name} className="object-fit  h-full w-full" />
      </div>
      <div className="w-[60%] flex flex-col gap-3">
        <h1 className="text-lg font-bold">
          {name}
        </h1>
        <p className="description">
          {reserved
            && (
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-[#18a2b8] rounded mr-6">
                Reserved
              </span>
            )}
          <span>
            {description}
          </span>
        </p>
        <ReservationBtn id={id} reserved={reserved} />
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Rocket;
