import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chat from '../../hooks/chat/Chat';
import ChatFrom from '../../components/chat/ChatFrom';
import ChatList from '../../components/chat/ChatList';
import Modal from '../../components/shared/Modal';

const ChatPage = () => {
  const { from, to } = useParams();

  const {
    setFrom,
    setTo,
    text,
    setText,
    messages,
    isEditing,
    setIsEditing,
    editMessage,
    setEditMessage,
    handleCreate,
    handleDelete,
    handleEdit,
    handleEditSubmit,
  } = Chat();

  useEffect(() => {
    if (from && to) {
      setFrom(parseInt(from));
      setTo(parseInt(to));
    }
  }, [from, to, setFrom, setTo]);

  return (
    <div>
      <h1>Chat</h1>
      <ChatFrom
        from={parseInt(from)}
        setFrom={setFrom}
        to={parseInt(to)}
        setTo={setTo}
        text={text}
        setText={setText}
        handleCreate={handleCreate}
      />

      <div>
        <h2>Messages</h2>
        <ChatList
          messages={messages}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>

      {isEditing && (
        <Modal
          isEditing={isEditing}
          editMessage={editMessage}
          setIsEditing={setIsEditing}
          setEditMessage={setEditMessage}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default ChatPage;