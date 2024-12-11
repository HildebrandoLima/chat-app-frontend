import React from 'react';
import Button from '../shared/Button';

const ChatList = ({ messages, handleEdit, handleDelete }) => {
  return (
    <ul>
      {Array.isArray(messages) && messages.length > 0 ? (
        messages.map((message) => (
          <li key={message.id}>
            <strong>{message.from === 1 ? 'Fulano 1' : 'Fulano 2'}:</strong> 
            {message.status === "Mensagem Apagada" ? message.status : message.text}

            {message.status !== "Mensagem Apagada" && (
              <>
                {message.from === 1 && (
                  <>
                    <Button
                      title="Editar"
                      onClick={() => handleEdit(message.id)}
                    />
                    <Button
                      title="Excluir"
                      onClick={() => handleDelete(message.id)}
                    />
                  </>
                )}
                {message.from === 2 && (
                  <>
                    <Button
                      title="Editar"
                      onClick={() => handleEdit(message.id)}
                    />
                    <Button
                      title="Excluir"
                      onClick={() => handleDelete(message.id)}
                    />
                  </>
                )}
              </>
            )}
          </li>
        ))
      ) : (
        <p>Nenhuma mensagem encontrada.</p>
      )}
    </ul>
  );
};

export default ChatList;