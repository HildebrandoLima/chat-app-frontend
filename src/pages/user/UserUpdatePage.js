import React from 'react';
import Header from '../../components/shared/Header';
import UserForm from '../../components/user/UserForm';
import UserUpdate from '../../hooks/user/UserUpdate';

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