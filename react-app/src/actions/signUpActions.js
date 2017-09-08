import Settigs from '../settings/settings';

export function userSignUpRequest(payload) {
  return dispatch => {

    var request = new Request(Settigs.wallet_api_url + '/user/' + (Settigs.wallet_api_use_suffix ? Settigs.wallet_api_url_suffix : ''), {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json; charset=uft-8'
      })
    });

    return fetch(request, {
      method: "POST",
      body: JSON.stringify(payload)
    });
  };
}