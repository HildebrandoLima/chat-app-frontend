import { api } from '../config/imports';

const ChatRepository = {
  getMessages: async (from, to) => await api.get(`messages?from=${from}&to=${to}`),

  getMessage: async (id) => await api.get(`messages/${id}`),

  postMessage: async (body) => await api.post(`messages`, body),

  putMessage: async (body) => await api.put(`messages`, body),

  deleteMessage: async (id) => await api.delete(`messages/${id}`)
};

export default ChatRepository;