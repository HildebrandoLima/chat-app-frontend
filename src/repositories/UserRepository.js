import { api } from '../config/imports';

const UserRepository = {
  getUsers: async (from, to) => await api.get(`users?from=${from}&to=${to}`),

  getUser: async (id) => await api.get(`users/${id}`),

  postUser: async (body) => await api.post(`users`, body),

  putUser: async (body) => await api.put(`users`, body),

  deleteUser: async (id) => await api.delete(`users/${id}`)
};

export default UserRepository;