let backendHost;

const hostname = window && window.location && window.location.hostname;
console.log("hostname: ", hostname)
if(hostname === 'localhost') {
  backendHost = 'https://dev.vozilla.pl/api-client-portal/map?objectType=';
} else {
  backendHost = 'https://dev.vozilla.pl/api-client-portal/map?objectType=';
}

export const API_HOST = `${backendHost}`;