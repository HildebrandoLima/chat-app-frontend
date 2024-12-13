import React from 'react';
import User from '../../hooks/user/User';
import Header from '../../components/shared/Header';
import UserList from '../../components/user/UserList';
import Spinner from '../../components/shared/Spinner';

const UserPage = () => {
  const { users, loading, error } = User();

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />

      <UserList users={users} />
    </div>
  );
};

export default UserPage;