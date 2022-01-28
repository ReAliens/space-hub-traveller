const addMissions = (missionsJoined, selectedMissions) => {
  const isJoined = missionsJoined.find(
    (mission) => mission.id === selectedMissions.id,
  );
  if (isJoined) {
    return missionsJoined.filter((mission) => mission.id !== selectedMissions.id);
  }
  return [...missionsJoined, { ...selectedMissions }];
};
export default addMissions;
