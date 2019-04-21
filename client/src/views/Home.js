import React, { useEffect } from 'react';
// import { socket } from '~/src/services';
import { View } from '~/src/components';
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
      <button onClick={handleClick}>Click me</button>
    </View>
  );
};

export default Home;
