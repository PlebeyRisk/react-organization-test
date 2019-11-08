import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/',
  // withCredentials: true,
  headers: {
    "Content-Type": 'application/json',
    Accept: 'application/json',
    Authorization: 'Token a451e088935152712e0fb19a2795e3b2f80a7e7e'
  }
});

const getOrganization = (term) => {
  return instance.post(`rs/suggest/party`, {query: term}).then(response => response.data, (error) => alert(error));
}

export const appAPI = {
  getOrganization,
};