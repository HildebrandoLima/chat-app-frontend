import React from 'react';
import User from '../../hooks/user/User';
import Header from '../../components/shared/Header';
import UserList from '../../components/user/UserList';
import Spinner from '../../components/shared/Spinner';

const UserPage = () => {
  const { users, loading, error } = User();

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <>
      <Header />

      <UserList users={users} />
    </>
  );
};

export default UserPage;