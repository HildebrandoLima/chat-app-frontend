import { React, Button, FormatTime } from '../../config/imports';

const ChatList = ({ from, messages, handleEdit, handleDelete }) => {
  return (
    <div className="list-group mb-4 chat-component">
      <ul className="list-group">
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message) => {

            const isSender = message.from !== from;

            return (
              <li
                key={message.id}
                className={`list-group-item d-flex justify-content-${isSender ? 'end' : 'start'} align-items-center`}
                {...(message.status !== "Mensagem Apagada" && !isSender ? { 'data-bs-toggle': 'dropdown' } : {})}
              >
                <div
                  className={`message-container rounded d-flex flex-column ${
                    isSender ? 'align-items-end mx-2' : 'align-items-start mx-2'
                  }`}
                >
                  <span className={`chat-component-message-text ${isSender ? 'text-end mx-2' : ''}`}>
                    {message.status === "Mensagem Apagada" ? message.status : message.text}  {FormatTime(message.createdAt)}
                  </span>
                </div>

                  <div className="d-flex align-items-center">
                    <div className="btn-group">

                      <ul className="dropdown-menu">
                        <li>
                          <Button
                            title="Editar"
                            onClick={() => handleEdit(message.id)}
                            color="dropdown-item text-success mx-2"
                          />
                        </li>

                        <li>
                          <Button
                            title="Excluir"
                            onClick={() => handleDelete(message.id)}
                            color="dropdown-item text-danger mx-2"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
              </li>
            );
          })
        ) : (
          <p>Nenhuma mensagem encontrada.</p>
        )}
      </ul>
    </div>
  );
};

export default ChatList;