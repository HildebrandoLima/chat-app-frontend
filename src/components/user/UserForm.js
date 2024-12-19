import React from 'react';
import Button from '../shared/Button';

const UserForm = ({ user, handleChange, handleSubmit, isEdit }) => {
  return (
    <div className="container rounded mt-1">

      <h2>Editar Usuário</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <>
          {isEdit ? null : (
            <div  className="mb-3">
              <label htmlFor="password" className="form-label">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          )}
        </>

        <Button color="primary" title={isEdit ? 'Salvar' : 'Criar'}/>
      </form>
    </div>
  );
};

export default UserForm;