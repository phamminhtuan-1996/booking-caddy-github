export function postBody(value) {
  return {
      'Token': localStorage.getItem('AccessToken'),
      'Lang': '1000000',
      ...value
  };
}
export function postBodyGetAuth(value) {
  return {
    'Token': JSON.parse(localStorage.getItem('TOKEN_RAT01')).token,
    'Lang': '1000000',
    ...value
  }; 
}