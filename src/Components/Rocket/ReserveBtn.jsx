import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeReservation } from '../../redux/rockets/rockets';

const ReservationBtn = (props) => {
  const dispatch = useDispatch();

  const { id, reserved } = props;

  const changeBooking = () => {
    dispatch(changeReservation(id));
  };

  return (
    <>
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
    </>
  );
};

ReservationBtn.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default ReservationBtn;
