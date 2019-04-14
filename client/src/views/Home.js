import React, { useEffect } from 'react';
import axios from '~/src/services/axios';

const Home = props => {
  useEffect(() => {
    axios.get('/').then(({ data }) => console.log(data));
  }, []);

  return <div>Home view</div>;
};

export default Home;
