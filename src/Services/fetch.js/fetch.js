const BODY_METHODS = ['PATCH', 'POST', 'PUT'];

export const makeRequest = (url, method, body) => {
  return fetch(url, {
    method,
    body: BODY_METHODS.includes(method) ? body : null,
    headers: {
      'Content-Type': BODY_METHODS.includes(method) ? 'application/json' : null
    }
  })
    .then(res => res.json());
};
