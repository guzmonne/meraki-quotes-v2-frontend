export const AUTH = 'AUTH';

const API_ROOT = process.env.REACT_APP_API_ROOT;
export let TOKEN = undefined;

export default store => next => action => {

  const callAPI = action[AUTH]

  if (callAPI === undefined) {
    next(action); 
    return;    
  }

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(callAPI.body),
  };

  console.log(process.env);

  fetch(`${API_ROOT}/users/login`, params)
  .then(response => response.json().then(json => {
    if (response.ok === false) {
      throw new Error(json);   
    }
    console.log(json);
    TOKEN = json.token;
  }))
  .catch(error => {
    console.error(error);
    next({
      type: 'error',
      error: {
        message: error.message,
        name: error.name,
      }
    })
  });
};
