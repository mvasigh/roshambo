import React, { useEffect } from 'react';
import { Link } from '@reach/router';
// import { socket } from '~/src/services';
import { View, Button } from '~/src/components';
import { axios } from '~/src/services';
import { CLIENT_API_URL } from '~/src/shared/constants';

const Home = props => {
  const handleClick = () => {};

  // testing that api is wired up
  useEffect(() => {
    axios.get(CLIENT_API_URL).then(({ data }) => console.log(data));
  }, []);

  return (
    <View>
      Home view <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Button onClick={handleClick}>Create Room</Button>
        <Button onClick={handleClick}>Join Room</Button>
      </div>
    </View>
  );
};

export default Home;
