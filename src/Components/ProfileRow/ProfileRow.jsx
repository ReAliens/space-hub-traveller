import PropTypes from 'prop-types';

const ProfileRow = ({ name, buttonText, onClick }) => (
  <div className="flex flex-col md:flex-row gap-5 p-5 justify-between px-10 md:py-0 border-2 border-gray-300 h-[200px] md:h-[80px] w-full items-center">
    <span className="md:text-xl md:w-[40%]">{name}</span>
    <button
      type="button"
      className={`${
        buttonText === 'Cancel Reservation'
          ? 'text-indigo-100  bg-slate-800 hover:text-slate-800 hover:bg-indigo-100'
          : 'border-red-500 text-red-500 border-2 hover:bg-red-500 hover:text-white'
      } p-2 rounded md:w-[40%]`}
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
