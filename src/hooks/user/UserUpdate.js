import { useState, useEffect, useNavigate, UserService } from '../../config/imports';

const UserUpdate = () => {
  const navigate = useNavigate();
  const { userId } = 1;
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (1) {
      const fetchUser = async () => {
        try {
          const data = await UserService.getUser(1);
          setUser(data);
          setIsEdit(true);
        } catch (error) {
          console.error('Erro ao carregar o usuário:', error);
        }
      };

      fetchUser();
    } else {
      setIsEdit(false);
    }
  }, [1]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await UserService.putUser(user);
      } else {
        await UserService.postUser(user);
      }
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar o usuário:', error);
    }
  };

  return {
    user,
    isEdit,
    handleChange,
    handleSubmit,
  };
};

export default UserUpdate;