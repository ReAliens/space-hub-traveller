import PropTypes from 'prop-types';

const TableRow = ({ data, index }) => {
  const { name, description } = data;
  return (
    <div
      className={`w-full grid grid-cols-4 ${
        index % 2 === 0 ? 'bg-gray-200' : ''
      } `}
    >
      <div className="border-gray-300 border-2 text-2xl flex items-center px-4">
        <h3>{name}</h3>
      </div>
      <div className=" border-gray-300 border-2 flex items-center p-4">
        <p>{description}</p>
      </div>
      <div className=" border-gray-300 border-2 text-2xl flex items-center px-4">
        <span className="bg-gray-600 text-white px-4">Not A member</span>
      </div>
      <div className=" border-gray-400 border-2 text-2xl flex items-center px-4">
        <button
          className="border-2 border-gray-400 text-gray-400 px-4"
          type="button"
        >
          Not A member
        </button>
      </div>
    </div>
  );
};

TableRow.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default TableRow;
