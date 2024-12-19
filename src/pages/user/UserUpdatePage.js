import { React, Header, UserForm, UserUpdate } from '../../config/imports';

const UserUpdatePage = () => {
  const { user, isEdit, handleChange, handleSubmit } = UserUpdate();

  return (
    <>
      <Header />

      <UserForm 
        user={user} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        isEdit={isEdit}
      />
    </>
  );
};

export default UserUpdatePage;