import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

const configurePusher = (to, from, setMessages) => {
  Pusher.logToConsole = true;

  const echo = new Echo({
    broadcaster: 'pusher',
    key: '5fb6f13c07c8b3833b8d',
    cluster: 'mt1',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    forceTLS: true,
  });

  const channel = echo.channel(`chat.${from}`);
  const channelTo = echo.channel(`chat.${to}`);

  const handleNewMessage = (data) => {
    setMessages((prevMessages) => {
      const messageExists = prevMessages.some((message) => message.id === data.id);
      if (!messageExists) {
        return [...prevMessages, data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      }
      return prevMessages;
    });
  };

  channel.listen('MessageSent', handleNewMessage);
  channelTo.listen('MessageSent', handleNewMessage);

  return () => {
    echo.leaveChannel(`chat.${from}`);
    echo.leaveChannel(`chat.${to}`);
  };
};

export default configurePusher;