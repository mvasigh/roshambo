import React from 'react';
import { socket } from '~/src/services';

const Home = props => {
  const handleClick = () => {
    socket.emit('load message', 'mehdi', 'mel', data => console.log(data));
  };

  return (
    <div>
      Home view <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
