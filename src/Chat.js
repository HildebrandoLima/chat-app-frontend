import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import axios from 'axios';

const Chat = () => {
  const [name, setName] = useState(1);
  const [text, setText] = useState('');
  const [to, setTo] = useState(2);
  const [messages, setMessages] = useState([]);

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
      setMessages(response.data);
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
              {message.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;