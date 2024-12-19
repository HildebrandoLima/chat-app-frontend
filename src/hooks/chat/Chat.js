import { useState, useEffect, pusher, ChatService } from '../../config/imports';

const Chat = () => {
  const [from, setFrom] = useState(0);
  const [text, setText] = useState('');
  const [to, setTo] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editMessage, setEditMessage] = useState(null);

  useEffect(() => {
    const disconnectPusher = pusher(from, to, setMessages);

    const fetchMessages = async () => {
      try {
        const data = await ChatService.getMessages(from, to);
        setMessages(data);
      } catch (error) {
        setError('Erro ao carregar amigos');
      } finally {
        setLoading(false);
      }
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
    const data = await ChatService.getMessage(id);
    setEditMessage(data);
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
    loading,
    error,
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