const url = 'http://localhost:3030/users';
const checkSessionUrl = 'http://localhost:3030/loggedin'

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


export const login = async (userData) => {
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
    if (jsonResponse.length > 0){
      await fetch(checkSessionUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
      }).then (async (response) => {
        const jsonResponse2 = await response.json();
        console.log(userData.email);
        console.log(jsonResponse2);
        if (!response.ok) {
          throw new Error(jsonResponse2.message);
        }
      });
    }
    if (!response.ok) {
      throw new Error(jsonResponse.message);
    }
    return jsonResponse;
  });
};


export const checkSession = async (userData) => {
  return await fetch(checkSessionUrl+'?email='+ userData.email, {
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



export const logout = async (userData) => {
  const response = await fetch(checkSessionUrl+'?email='+ userData.email, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const jsonResponse = await response.json();
  if (!response.ok) {
    throw new Error(jsonResponse.message);
  }
  return jsonResponse.data;
};