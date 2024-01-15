export function getInfo(url) {
    return new Promise((resolve, reject) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(error => console.log('error', error));
    })
}

