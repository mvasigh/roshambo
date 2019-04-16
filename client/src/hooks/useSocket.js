import React, { useContext } from 'react';

export const SocketContext = React.createContext();

export const SocketProvider = props => (
  <SocketContext.Provider value={props.connection} {...props}>
    {props.children}
  </SocketContext.Provider>
);

export function useSocket() {
  return useContext(SocketContext);
}
