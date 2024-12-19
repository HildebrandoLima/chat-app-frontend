import { React, Header, Spinner, User, UserList } from '../../config/imports';

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