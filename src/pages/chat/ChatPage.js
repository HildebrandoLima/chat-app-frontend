import React from 'react';
import useChat from '../../hooks/chat/Chat';
import ChatFrom from '../../components/chat/ChatFrom';
import ChatList from '../../components/chat/ChatList';
import Modal from '../../components/shared/Modal';

const ChatPage = () => {
  const {
    from,
    setFrom,
    text,
    setText,
    to,
    setTo,
    messages,
    isEditing,
    setIsEditing,
    editMessage,
    setEditMessage,
    handleCreate,
    handleDelete,
    handleEdit,
    handleEditSubmit,
  } = useChat();

  return (
    <div>
      <h1>Chat</h1>
      <ChatFrom
        from={from}
        setFrom={setFrom}
        to={to}
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