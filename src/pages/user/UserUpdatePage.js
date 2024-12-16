import React from 'react';
import Header from '../../components/shared/Header';
import UserForm from '../../components/user/UserForm';
import UserUpdate from '../../hooks/user/UserUpdate';

const UserUpdatePage = () => {
  const { user, error, isEdit, handleChange, handleSubmit } = UserUpdate();

  return (
    <div>
      <Header />
      <h2>{isEdit ? 'Editar Usuário' : 'Criar Usuário'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserForm 
        user={user} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        isEdit={isEdit}
      />
    </div>
  );
};

export default UserUpdatePage;