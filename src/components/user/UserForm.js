import React from 'react';
import Button from '../shared/Button';

const UserForm = ({ user, handleChange, handleSubmit, isEdit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            disabled={isEdit}
          />
        </div>
        <Button color="primary" title={isEdit ? 'Salvar alterações' : 'Criar usuário'}/>
      </form>
    </div>
  );
};

export default UserForm;