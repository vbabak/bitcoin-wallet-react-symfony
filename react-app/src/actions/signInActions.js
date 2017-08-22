import axios from 'axios';

export function userSignInRequest(userData) {
  return dispatch => {
    return axios.post('http://bitcoin-wallet-react-symfony-api.dev/api/v1/users', userData);
  };
}