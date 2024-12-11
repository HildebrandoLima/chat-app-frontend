import React from 'react';
import Button from './Button';

const Modal = ({ isEditing, editMessage, setIsEditing, setEditMessage, handleEditSubmit }) => {
  if (!isEditing) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Editar Mensagem</h3>
        <textarea
          value={editMessage.text}
          onChange={(e) => setEditMessage({ ...editMessage, text: e.target.value })}
        />

        <Button title="Salvar" onClick={handleEditSubmit} />
        <Button title="Cancelar" onClick={() => setIsEditing(false)} />
      </div>
    </div>
  );
};

export default Modal;