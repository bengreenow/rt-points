export const useRoom = (roomName: string) => {
  const { socket } = useSocket();

  socket.emit("join", roomName);

  onBeforeUnmount(() => {
    socket.emit("leave", roomName);
  });

  return {
    socket,
  };
};
