import axios from 'axios';

const client = axios.create();

const BASE_URL = 'https://newsapi.org/v2';

client.defaults.baseURL = BASE_URL;
client.defaults.headers.common['X-Api-key'] =
  '2b6f614ea45e4565b9351482c7e7454f';
client.defaults.headers.post['Content-Type'] = 'application/json';

const onSuccess = function (response) {
  return response?.data;
};

const onError = function (error) {
  if (axios.isCancel(error)) {
    return Promise.reject(error);
  }
  if (error?.response) {
    return Promise.reject(error?.response?.data);
  } else {
    return error.message;
  }
};

client.interceptors.response.use(onSuccess, onError);
client.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

const request = client;

export default request;
