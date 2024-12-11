import ChatRepository from '../repositories/ChatRepository';

const ChatService = {
  getMessages: async (from, to) => {
    try {
      const response = await ChatRepository.getMessages(from, to);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  getMessage: async (id) => {
    try {
      const response = await ChatRepository.getMessage(id);
      return response.data.data[0];
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  postMessage: async (body) => {
    try {
      const response = await ChatRepository.postMessage(body);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  putMessage: async (body) => {
    try {
      const response = await ChatRepository.putMessage(body);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  deleteMessage: async (id) => {
    try {
      const response = await ChatRepository.deleteMessage(id);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};

export default ChatService;