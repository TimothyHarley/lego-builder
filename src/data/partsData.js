import axios from 'axios';

const getFaces = () => axios.get('http://localhost:3003/heads');

const getTorsos = () => axios.get('http://localhost:3003/torsos');

const getLegs = () => axios.get('http://localhost:3003/legs');

export default {
  getFaces,
  getTorsos,
  getLegs,
};
