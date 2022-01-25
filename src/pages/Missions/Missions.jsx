import { useSelector } from 'react-redux';
import TableHeader from '../../Components/TableHeader/TableHeader';
import TableRow from '../../Components/TableRow/TableRow';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.data);
  return (
    <div className="px-10">
      <TableHeader />
      <div className="grid grid-flow-row pb-8">
        {missions.map((mission, index) => (
          <TableRow key={mission.id} data={mission} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Missions;
