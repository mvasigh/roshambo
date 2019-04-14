import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// CSS reset
import './styles/reset.css';

import axios from 'axios';

axios.get('http://localhost:3000/').then(({ data }) => console.log(data));

ReactDOM.render(<App />, document.getElementById('app'));
