import { UserRepository } from '../config/imports';

const UserService = {
  getUsers: async (from, to) => {
    try {
      const response = await UserRepository.getUsers(from, to);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  getUser: async (id) => {
    try {
      const response = await UserRepository.getUser(id);
      return response.data.data[0];
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  postUser: async (body) => {
    try {
      const response = await UserRepository.postUser(body);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  putUser: async (body) => {
    try {
      const response = await UserRepository.putUser(body);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await UserRepository.deleteUser(id);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};

export default UserService;