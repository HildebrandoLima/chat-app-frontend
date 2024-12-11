import React from 'react';
import Button from '../shared/Button';

const ChatFrom = ({
  from,
  setFrom,
  to,
  setTo,
  text,
  setText,
  handleCreate,
}) => {
  return (
    <form onSubmit={handleCreate}>
      <input
        type="text"
        placeholder="Your name"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
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

      <Button title="Enviar" />

    </form>
  );
};

export default ChatFrom;