import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import UserForm from './UserForm';

const UserCreate = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null); // Para lidar com erros

  const handleCreate = async (formData) => {
    try {
      await UserService.postUser(formData); // Cria o novo usuário
      navigate('/'); // Redireciona para a página inicial ou onde preferir
    } catch (error) {
      console.error('Erro ao criar o usuário:', error);
      setError('Erro ao salvar o usuário');
    }
  };

  return (
    <div>
      <h2>Criar Usuário</h2>
      {error && <div>{error}</div>}
      <UserForm user={{ name: '', email: '' }} onSubmit={handleCreate} />
    </div>
  );
};

export default UserCreate;
