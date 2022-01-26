import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMession } from '../../redux/missions/missionsActions';

const TableRow = ({ data, index }) => {
  const dispatch = useDispatch();
  const handleJoin = () => {
    dispatch(joinMession(data?.id));
  };
  return (
    <div
      className={`w-full grid grid-cols-4 ${
        index % 2 === 0 ? 'bg-gray-200' : ''
      } `}
    >
      <div className="border-gray-300 border-2 text-2xl flex items-center px-4">
        <h3>{data?.name}</h3>
      </div>
      <div className=" border-gray-300 border-2 flex items-center p-4">
        <p>{data?.description}</p>
      </div>
      <div className=" border-gray-300 border-2 text-2xl flex items-center px-4">
        <span
          className={`${
            data.joined ? 'bg-cyan-600' : 'bg-gray-600'
          } text-white px-5`}
        >
          {data?.joined ? 'Active member' : 'Not A member'}
        </span>
      </div>
      <div className=" border-gray-400 border-2 text-2xl flex items-center px-4">
        <button
          onClick={handleJoin}
          className={`border-2 ${
            data?.joined
              ? 'border-red-500 text-red-500'
              : 'border-gray-400 text-gray-400'
          }  px-4`}
          type="button"
        >
          {data?.joined ? 'Leave Mission' : 'Join Mission'}
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
    joined: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default TableRow;
