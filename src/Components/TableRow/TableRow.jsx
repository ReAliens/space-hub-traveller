/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Breakpoint } from 'react-socks';
import { joinMession } from '../../redux/missions/missionsActions';

const TableRow = ({ data, index, joined }) => {
  const dispatch = useDispatch();
  const { id } = data;
  const handleJoin = () => {
    dispatch(joinMession(data));
  };
  const styling = joined.find((item) => item.id === id);

  return (
    <div
      className={`w-full grid grid-cols-4 ${
        index % 2 === 0 ? 'bg-gray-200' : ''
      } `}
    >
      <div className="border-gray-300 border-2 text-xs md:text-2xl flex items-start md:items-center p-2 md:px-4 break-word">
        <h3>{data?.name}</h3>
      </div>
      <div className=" border-gray-300 border-2 text-xs md:text-base flex items-start md:items-center p-4 overflow-scroll md:overflow-hidden break-word">
        <p>{data?.description}</p>
      </div>
      <div className=" border-gray-300 border-2 text-2xl flex items-center px-4 justify-center">
        <span
          className={`${
            id === styling?.id ? 'bg-cyan-600' : 'bg-gray-600'
          } text-white px-2 md:px-4 h-8 md:h-20 text-sm md:text-2xl flex items-center justify-center`}
        >
          <Breakpoint medium up>
            {id === styling?.id ? 'Active member' : 'Not A member'}
          </Breakpoint>
          <Breakpoint small down>
            {id === styling?.id ? 'Active' : 'Not'}
          </Breakpoint>
        </span>
      </div>
      <div className=" border-gray-400 border-2 text-2xl flex items-center px-4 justify-center">
        <button
          onClick={handleJoin}
          className={`border-2 ${
            id === styling?.id
              ? 'border-red-500 text-red-500'
              : 'border-gray-400 text-gray-400'
          } px-2 md:px-4 h-8 md:h-20 text-sm md:text-2xl`}
          type="button"
        >
          <Breakpoint medium up>
            {id === styling?.id ? 'Leave Mission' : 'Join Mission'}
          </Breakpoint>
          <Breakpoint small down>
            {id === styling?.id ? 'Leave' : 'Join'}
          </Breakpoint>
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
