import { React, Button } from '../../config/imports';

const Modal = ({ isEditing, editMessage, setIsEditing, setEditMessage, handleEditSubmit }) => {
  if (!isEditing) return null;

  return (
    <div className="modal fade show modal-component" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Mensagem</h5>
            <button type="button" className="btn-close" onClick={() => setIsEditing(false)}></button>
          </div>

          <div className="modal-body">
            <textarea
              value={editMessage ? editMessage.text : ''}
              onChange={(e) => setEditMessage({ ...editMessage, text: e.target.value })}
              className="form-control"
              rows="4"
            />
          </div>

          <div className="modal-footer">
            <Button title="Salvar" color="primary" onClick={handleEditSubmit} />
            <Button title="Cancelar" color="secondary" onClick={() => { setIsEditing(false); setEditMessage(null); }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;