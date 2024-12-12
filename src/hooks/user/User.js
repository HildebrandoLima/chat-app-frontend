import { useState, useEffect } from 'react';
import UserService from '../../services/UserSerivice';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await UserService.getUsers();
        setUsers(data);
      } catch (error) {
        setError('Erro ao carregar amigos');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error
  };
};

export default Users;