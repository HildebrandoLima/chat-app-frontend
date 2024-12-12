import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chat from '../../hooks/chat/Chat';
import ChatFrom from '../../components/chat/ChatFrom';
import ChatList from '../../components/chat/ChatList';
import Modal from '../../components/shared/Modal';

const ChatPage = () => {
  const { from, to } = useParams();

  const {
    text,
    messages,
    users,
    editMessage,
    isEditing,
    setFrom,
    setTo,
    setText,
    setIsEditing,
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
    <div className="container mt-4">
      <h1>Chat</h1>

      <div className="list-group mb-4" style={{ height: '400px', overflowY: 'scroll' }}>
        <ChatList
          from={parseInt(from)}
          setFrom={setFrom}
          messages={messages}
          users={users}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>

      <ChatFrom
        from={parseInt(from)}
        setFrom={setFrom}
        to={parseInt(to)}
        setTo={setTo}
        text={text}
        setText={setText}
        handleCreate={handleCreate}
      />

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