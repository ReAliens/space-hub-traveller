import { useSelector } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner';
import TableHeader from '../../Components/TableHeader/TableHeader';
import TableRow from '../../Components/TableRow/TableRow';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer);
  return (
    <div>
      {missions.loading ? (
        <div className="h-screen overflow-hidden w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <TableHeader />
          <div className="grid grid-flow-row pb-8">
            {missions.data.map((mission, index) => (
              <TableRow key={mission.id} data={mission} index={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Missions;
