import { useDispatch } from 'react-redux';
import { Breakpoint } from 'react-socks';
import PropTypes from 'prop-types';
import { changeReservation } from '../../redux/rockets/rockets';

const ReservationBtn = (props) => {
  const dispatch = useDispatch();

  const { id, reserved } = props;

  const changeBooking = () => {
    dispatch(changeReservation(id));
  };

  return (
    <button
      type="button"
      onClick={changeBooking}
      className={`${reserved
        ? 'text-indigo-100  bg-slate-300 hover:bg-slate-400'
        : 'text-indigo-100 bg-blue-700 hover:bg-blue-400'}
        rounded w-20 h-8 md:w-40 md:h-18 mt-auto
    `}
    >
      <Breakpoint medium up>
        {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
      </Breakpoint>
      <Breakpoint small down>
        {reserved ? 'Cancel' : 'Reserve'}
      </Breakpoint>
    </button>
  );
};

ReservationBtn.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default ReservationBtn;
