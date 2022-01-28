const reserveRocket = (reservedRockets, selectedRockets) => {
  const isJoined = reservedRockets.find(
    (rocket) => rocket.id === selectedRockets.id,
  );
  if (isJoined) {
    return reservedRockets.filter(
      (rocket) => rocket.id !== selectedRockets.id,
    );
  }
  return [...reservedRockets, { ...selectedRockets }];
};
export default reserveRocket;
