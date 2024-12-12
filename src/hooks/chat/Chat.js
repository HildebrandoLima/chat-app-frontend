import { useState, useEffect } from 'react';
import configurePusher from '../../config/pusher';
import ChatService from '../../services/ChatService';

const Chat = () => {
  const [from, setFrom] = useState(0);
  const [text, setText] = useState('');
  const [to, setTo] = useState(0);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editMessage, setEditMessage] = useState(null);

  useEffect(() => {
    const disconnectPusher = configurePusher(from, to, setMessages);

    const fetchMessages = async () => {
      const data = await ChatService.getMessages(from, to);
      setUsers(data.users);
      setMessages(data.messages);
    };

    if (to && from) {
      fetchMessages();
    }

    return () => {
      disconnectPusher();
    };
  }, [from, to]);

  const handleCreate = async (e) => {
    e.preventDefault();

    const data = await ChatService.postMessage({ from, text, to });
    if (data) setMessages((messages) => [...messages, data]);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta mensagem?')) {
      const data = await ChatService.deleteMessage(id);
      if (data) {
        setMessages((messages) =>
          messages.map((message) =>
            message.id === id ? { ...message, text: "Mensagem Apagada" } : message
          )
        );
      }
    }
  };

  const handleEdit = async (id) => {
    const response = await ChatService.getMessage(id);
    setEditMessage(response);
    setIsEditing(true);
  };

  const handleEditSubmit = async () => {
    if (!editMessage || !editMessage.id || !editMessage.text) {
      console.error('Erro: código e texto são obrigatórios para editar uma mensagem');
      return;
    }

    const data = await ChatService.putMessage(editMessage);
    if (data) {
      setMessages((messages) =>
        messages.map((message) =>
          message.id === editMessage.id ? { ...message, text: data.text } : message
        )
      );
    }
    setIsEditing(false);
    setEditMessage(null);
  };

  return {
    from,
    to,
    text,
    messages,
    users,
    isEditing,
    editMessage,
    setFrom,
    setText,
    setTo,
    setEditMessage,
    setIsEditing,
    handleCreate,
    handleDelete,
    handleEdit,
    handleEditSubmit,
  };  
};

export default Chat;