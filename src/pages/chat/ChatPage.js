import { React, useEffect, useParams, Header, ChatFrom, Modal, Spinner, Chat, ChatList } from '../../config/imports';

const ChatPage = () => {
  const { from, to } = useParams();
  const { text, messages, loading, editMessage, isEditing, setFrom, setTo, setText, setIsEditing, setEditMessage, handleCreate, handleDelete, handleEdit, handleEditSubmit, } = Chat();

  useEffect(() => {
    if (from && to) {
      setFrom(parseInt(from));
      setTo(parseInt(to));
    }
  }, [from, to, setFrom, setTo]);

  if (loading) {
    return (
      <div>
        <Spinner />
    </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="container rounded mt-3">

        <ChatList
          from={parseInt(from)}
          setFrom={setFrom}
          messages={messages}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

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
    </div>
  );
};

export default ChatPage;