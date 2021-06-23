const url = 'http://localhost:3030/users';

export const Register = async (userData) => {
  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify(userData),
  }).then (async (response) => {
    const jsonResponse = await response.json();
    if (!response.ok) {
      throw new Error(jsonResponse.message);
    }
    return jsonResponse;
  });
};


export const Login = async (userData) => {
  return await fetch(url+'?email='+ userData.email + '&password=' + userData.password , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  }).then (async (response) => {
    const jsonResponse = await response.json();
    if (!response.ok) {
      throw new Error(jsonResponse.message);
    }
    return jsonResponse;
  });
};