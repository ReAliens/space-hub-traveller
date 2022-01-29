/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Breakpoint } from 'react-socks';
import { changeReservation } from '../../redux/rockets/rockets';
// import Description from './Description';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket, reservedRockets } = props;

  const changeBooking = () => {
    dispatch(changeReservation(rocket));
  };

  const styling = reservedRockets.find((item) => item.id === rocket.id);

  return (
    <li className=" h-80 lg:h-60 flex gap-6 md:gap-10">
      <div className="w-[30%] md:w-[20%]">
        <img
          src={rocket.images[0]}
          alt={rocket.name}
          className="object-fit  h-full w-full"
        />
      </div>
      <div className="w-[60%] flex flex-col gap-3">
        <h2 className="text-base md:text-lg font-bold">{rocket.name}</h2>
        <p className="text-ellipsis overflow-y-auto md:overflow-hidden">
          {styling?.id === rocket.id && (
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-[#18a2b8] rounded mr-6">
              Reserved
            </span>
          )}
          <span>{rocket.description}</span>
        </p>
        <button
          type="button"
          onClick={changeBooking}
          className={`${
            styling?.id === rocket.id
              ? 'text-indigo-100  bg-slate-300 hover:bg-slate-400'
              : 'text-indigo-100 bg-blue-700 hover:bg-blue-400'
          }
        rounded w-20 h-8 md:w-40 md:h-18 mt-auto
    `}
        >
          <Breakpoint medium up>
            {styling?.id === rocket.id
              ? 'Cancel Reservation'
              : 'Reserve Rocket'}
          </Breakpoint>
          <Breakpoint small down>
            {styling?.id === rocket.id ? 'Cancel' : 'Reserve'}
          </Breakpoint>
        </button>
      </div>
    </li>
  );
};

// Rocket.propTypes = {
//   rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
// };

export default Rocket;
