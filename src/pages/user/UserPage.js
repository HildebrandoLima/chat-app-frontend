import React from 'react';
import User from '../../hooks/user/User';

const UserPage = () => {
  const { users, loading, error } = User();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Users</h1>

      <div>
        {users.length === 0 ? (
          <p>Não há amigos em sua lista.</p>
        ) : (
          <ul>
            {users.map((user) => (
            <ul key={user.id}>
                {user.friends.map((friend) => (
                <li key={friend.id}>
                    <a href={`/chat/${user.id}/${friend.id}`}>{friend.name}</a>
                </li>
                ))}
            </ul>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserPage;