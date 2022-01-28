/* eslint-disable implicit-arrow-linebreak */
import { useDispatch, useSelector } from 'react-redux';
import ProfileRow from '../../Components/ProfileRow/ProfileRow';
import { joinMession } from '../../redux/missions/missionsActions';
import { changeReservation } from '../../redux/rockets/rockets';

const Profile = () => {
  const dispatch = useDispatch();
  const { readyRockets } = useSelector((state) => state);
  const { rockets } = readyRockets;
  const { excistedMissions } = useSelector((state) => state);
  const { joinedMissions } = excistedMissions;

  const handleJoinMission = (mission) => {
    dispatch(joinMession(mission));
  };

  const handleReserveRocket = (id) => {
    dispatch(changeReservation(id));
  };

  return (
    <div className="grid grid-cols-2 items-center w-full h-96 gap-10">
      <div className="flex flex-col justify-start items-center h-full">
        <h2 className="md:text-4xl mb-3">My Rockets</h2>
        {rockets.map(
          (rocket) =>
            rocket.reserved && (
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
        <h2 className="md:text-4xl mb-3 min">My Missions</h2>
        {joinedMissions.map((mission) => (
          <ProfileRow
            key={mission.id}
            name={mission.name}
            buttonText="Leave mission"
            onClick={() => handleJoinMission(mission)}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
