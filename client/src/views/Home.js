import React from 'react';
import { socket } from '~/src/services';
import { View } from '~/src/components';

const Home = props => {
  const handleClick = () => {
    socket.emit('load message', 'mehdi', 'mel', data => console.log(data));
  };

  return (
    <View>
      Home view <br />
      <button onClick={handleClick}>Click me</button>
    </View>
  );
};

export default Home;
