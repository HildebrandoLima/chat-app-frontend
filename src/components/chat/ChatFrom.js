import { React, Button } from '../../config/imports';

const ChatFrom = ({ from, setFrom, to, setTo, text, setText, handleCreate }) => {
  return (
    <form onSubmit={handleCreate} className="d-flex justify-content-between align-items-center">
      <input
        type="hidden"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        type="hidden"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <input
        placeholder="Digite sua mensagem..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="form-control me-2 form-input"
        required
      />

      <Button title="Enviar" color="primary" />
    </form>
  );
};

export default ChatFrom;