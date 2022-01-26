import { useDispatch, useSelector } from 'react-redux';
import ProfileRow from '../../Components/ProfileRow/ProfileRow';
import { joinMession } from '../../redux/missions/missionsActions';
import { changeReservation } from '../../redux/rockets/rockets';

const Profile = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rocketReducer);
  const missions = useSelector((state) => state.missionReducer);

  const handleJoinMission = (id) => {
    dispatch(joinMession(id));
  };

  const handleReserveRocket = (id) => {
    dispatch(changeReservation(id));
  };

  return (
    <div className="grid grid-cols-2 items-center w-full h-96 gap-10">
      <div className="flex flex-col justify-start items-center h-full">
        <h2 className="text-4xl mb-3">My Rockets</h2>
        {rockets.map(
          (rocket) => rocket.reserved && (
          <ProfileRow
            key={rocket.id}
            name={rocket.name}
            buttonText="Cancel Reservation"
            onClick={() => handleReserveRocket(rocket.id)}
          />
          ),
        )}
      </div>
      <div className="flex flex-col justify-start items-center h-full">
        <h2 className="text-4xl mb-3">My Missions</h2>
        {missions.data.map(
          (mission) => mission.joined && (
          <ProfileRow
            key={mission.id}
            name={mission.name}
            buttonText="Leave mission"
            onClick={() => handleJoinMission(mission.id)}
          />
          ),
        )}
      </div>
    </div>
  );
};

export default Profile;
