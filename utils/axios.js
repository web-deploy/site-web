import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7001/api/v1'

let options = {
    timeout: 5000
}

const dataProxy = axios.create(options);

dataProxy.interceptors.response.use((response) => {
  const { status } = response;

  if (status === 200 || status === 304) {
    return Promise.resolve(response.data.data);
  }

  return Promise.reject(response.data);
})

export default dataProxy;
