// import axios from 'axios';
import Settigs from '../settings/settings';

export function userSignInRequest(data) {
  return dispatch => {
    // return axios.post(Settigs.wallet_api_url + '/user/' + (Settigs.wallet_api_use_suffix ? Settigs.wallet_api_url_suffix : ''), JSON.stringify(data), {headers: {'content-type': 'application/json'}});
  };
}