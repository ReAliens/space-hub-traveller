import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeReservation } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    id, name, description, reserved, images,
  } = rocket;

  const changeBooking = () => {
    dispatch(changeReservation(id));
  };
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
        {
          reserved
            ? (
              <button type="button" onClick={changeBooking} className=" p-2 rounded text-indigo-100  bg-slate-300 hover:bg-slate-400 w-40">
                Cancel Reservation
              </button>
            )
            : (
              <button type="button" onClick={changeBooking} className=" p-2 rounded text-indigo-100 bg-blue-700 hover:bg-blue-400 w-40">
                Reserve Rocket
              </button>
            )
        }
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Rocket;
