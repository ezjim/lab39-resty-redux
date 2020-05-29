export const fetchData = (url, request, next) => {
  return fetch(url, request, next)
    .then(res => { 
      return res.json()
        .then(response => {
          const responseData = {
            response: response,
            recieved: res.recieved
          };
          return responseData;      
        })
        .catch(next);    
    });
};
