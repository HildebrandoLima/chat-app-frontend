import { React, useState, useNavigate, UserService, UserForm } from '../../config/imports';

const UserCreate = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleCreate = async (formData) => {
    try {
      await UserService.postUser(formData);
      navigate('/');
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
