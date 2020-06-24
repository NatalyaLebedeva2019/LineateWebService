import axios from 'axios';

const prefix = '/api/v1';

export async function fetchAllProducts() {
  const { data } = await axios.get(`${prefix}/products`);
  return data;
}

export function register(data) {
  return axios.post(`${prefix}/users/register`, data).then((result) => result.data);
}

export function authUser(data) {
  return axios.post(`${prefix}/users/login`, data).then((result) => result.data);
}

export async function getCurrentUser() {
  const { data } = await axios.get(`${prefix}/users/profile`);
  return data;
}

export function logout() {
  return axios.post(`${prefix}/users/logout`).then((result) => result.data);
}

export function changeUserName(data) {
  return axios.put(`${prefix}/users/${data.id}`, { name: data.name }).then((result) => result.data);
}

export function changeUserEmail(data) {
  return axios.put(`${prefix}/users/${data.id}`, { email: data.email }).then((result) => result.data);
}

export function changeUserPhone(data) {
  return axios.put(`${prefix}/users/${data.id}`, { phone: data.phone }).then((result) => result.data);
}

export function changeUserBalance(data) {
  return axios.put(`${prefix}/users/${data.id}`, { balance: data.balance }).then((result) => result.data);
}

export function createOrder(data) {
  return axios.post(`${prefix}/orders`, data).then((result) => result.data);
}

export function fetchAllOrders(data) {
  return axios.get(`${prefix}/users/${data.id}/orders`).then((result) => result.data);
}

export function changeOrder(data) {
  return axios.put(`${prefix}/orders/${data.id}`, { status: data.status, courier_id: data.courier_id })
    .then((result) => result.data);
}
