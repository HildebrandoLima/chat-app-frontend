import React from 'react';
import Button from '../shared/Button';
import FormatTime from '../../utils/formatTime/FormatTime';

const ChatList = ({ from, users, messages, handleEdit, handleDelete }) => {
  return (
    <ul className="list-group">
      {Array.isArray(messages) && messages.length > 0 ? (
        messages.map((message) => {
          const sender = users.find((user) => user.id === message.from);
          const recipient = users.find((user) => user.id === message.to);
          const senderName = sender ? sender.name : 'Desconhecido';
          const recipientName = recipient ? recipient.name : 'Desconhecido';

          return (
            <li key={message.id} className="list-group-item d-flex justify-content-between">
              <div>
                <strong>
                  { sender !== from ? senderName : recipientName}:&nbsp;&nbsp;
                </strong>
                <span>{message.status === "Mensagem Apagada" ? message.status : message.text}</span>
              </div>

              {message.status !== "Mensagem Apagada" && (
                <div className="d-flex align-items-center">
                  <small className="me-3">
                    {FormatTime(message.createdAt)}
                  </small>

                  <Button
                    title="Editar"
                    onClick={() => handleEdit(message.id)}
                    color="success mx-2"
                  />

                  <Button
                    title="Excluir"
                    onClick={() => handleDelete(message.id)}
                    color="danger mx-2"
                  />
                </div>
              )}
            </li>
          );
        })
      ) : (
        <p>Nenhuma mensagem encontrada.</p>
      )}
    </ul>
  );
};

export default ChatList;