import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import axios from 'axios';

const Chat = () => {
  const [name, setName] = useState(1);
  const [text, setText] = useState('');
  const [to, setTo] = useState(2);
  const [messages, setMessages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editMessage, setEditMessage] = useState(null);

  useEffect(() => {
    Pusher.logToConsole = true;

    // Configurando o Echo para escutar o canal
    const echo = new Echo({
      broadcaster: 'pusher',
      key: '5fb6f13c07c8b3833b8d',
      cluster: 'mt1',
      wsHost: '127.0.0.1',
      wsPort: 6001,
      forceTLS: true,
    });

    // Assinando o canal para o destinatário específico
    const channel = echo.channel('chat.' + to);

    // Reagindo ao evento de mensagem
    channel.listen('MessageSent', (data) => {
      setMessages((messages) => [...messages, data]);
    });

    const fetchMessages = async () => {
      const response = await axios.get(`http://127.0.0.1:6001/api/messages?to=${to}`);
      setMessages(response.data.data);
    };

    if (to) {
      fetchMessages();
    }

    return () => {
      echo.leaveChannel('chat.' + to);
    };
  }, [to]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:6001/api/messages', {
        from: name,
        text: text,
        to: to,
      });

      if (response.status === 200 || response.status === 201) {
        setMessages((messages) => [...messages, response.data.data]);
      } else {
        console.error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Falha ao enviar mensagem:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta mensagem?')) {
      try {
        await axios.delete(`http://127.0.0.1:6001/api/messages/${id}`);
        setMessages((messages) =>
          messages.map((message) =>
            message.id === id ? { ...message, text: "Mensagem apagada" } : message
          )
        );        
      } catch (error) {
        console.error('Erro ao excluir mensagem:', error);
      }
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:6001/api/messages/${id}`);
      if (response.data.status === 200) {
        setEditMessage(response.data.data[0]);
        setIsEditing(true);
      }
    } catch (error) {
      console.error('Erro ao carregar a mensagem:', error);
    }
  };

  const handleEditSubmit = async () => {
    if (!editMessage || !editMessage.id || !editMessage.text) {
      console.error('Erro: id e texto são obrigatórios para editar uma mensagem');
      return;
    }
  
    try {
      const response = await axios.put(`http://127.0.0.1:6001/api/messages/`, {
        id: editMessage.id,
        text: editMessage.text,
      });

      setMessages((messages) =>
        messages.map((message) =>
          message.id === editMessage.id ? { ...message, text: response.data.data.text } : message
        )
      );

      setIsEditing(false);
      setEditMessage(null);
    } catch (error) {
      console.error('Erro ao editar mensagem:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipient"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          placeholder="Your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>

      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              {message.status === "Mensagem Apagada" ? message.status : message.text}

              <button onClick={() => handleEdit(message.id, message.text)}>Editar</button>
              <button onClick={() => handleDelete(message.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar Mensagem</h3>
            <input
              type="text"
              placeholder="ID da Mensagem"
              value={editMessage.id}
              disabled
            />
            <textarea
              value={editMessage.text}
              onChange={(e) => setEditMessage({ ...editMessage, text: e.target.value })}
            />
            <button onClick={handleEditSubmit}>Salvar</button>
            <button onClick={() => setIsEditing(false)}>Cancelar</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Chat;