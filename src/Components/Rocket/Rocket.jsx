import PropTypes from 'prop-types';
import Description from './Description';
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
      <div className="w-[60%] flex flex-col gap-3 p-4">
        <h2 className="text-base md:text-lg font-bold">
          {name}
        </h2>
        <Description description={description} reserved={reserved} />
        <ReservationBtn id={id} reserved={reserved} />
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Rocket;
