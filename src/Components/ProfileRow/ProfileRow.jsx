import PropTypes from 'prop-types';

const ProfileRow = ({ name, buttonText, onClick }) => (
  <div className="flex justify-between px-10 border-2 border-gray-300 h-[80px] w-full items-center">
    <span className="text-xl">{name}</span>
    <button
      type="button"
      className={`${
        buttonText === 'Cancel Reservation'
          ? 'p-2 rounded text-indigo-100  bg-slate-300 hover:bg-slate-400 w-40'
          : 'border-red-500 text-red-500 border-2 p-2 rounded hover:bg-red-500 hover:text-white'
      } `}
      onClick={onClick}
    >
      {buttonText}
    </button>
  </div>
);

ProfileRow.propTypes = {
  name: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProfileRow;
