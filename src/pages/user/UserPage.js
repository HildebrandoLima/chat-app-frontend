import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../hooks/user/User';
import FormatTime from '../../utils/formatTime/FormatTime';

const UserPage = () => {
  const { users, loading, error } = User();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Usuários</h1>
      {users.length === 0 ? (
        <p>Não há amigos em sua lista.</p>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-12 mb-3">
              {user.friends.map((friend) => (
                <Link to={`/chat/${user.id}/${friend.id}`} style={{ textDecoration: 'none' }}>
                  <div key={friend.id} className="card mt-3">

                    <div className="card-body d-flex align-items-center">
                      <img
                        src=""
                        alt={friend.name}
                        className="rounded-circle"
                        style={{ width: '50px', height: '50px', marginRight: '15px' }}
                      />

                      <div className="flex-grow-1">
                        <h5 className="card-title">{friend.name}</h5>
                        <p className="card-text text-truncate">aaaa</p>
                      </div>

                      <div className="text-end">
                        <small>
                          {FormatTime(friend.createdAt)}
                        </small>
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPage;