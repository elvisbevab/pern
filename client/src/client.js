import axios from 'axios';

const API_URL = 'http://localhost:3004/api';

export const getApiData = (path, setFunction) => {
  axios
    .get(API_URL + path)
    .then((res) => {
      console.log('res.data');
      console.log(res.data);

      setFunction(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};