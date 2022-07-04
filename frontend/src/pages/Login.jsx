import React, { useContext, useState } from 'react';
import InputLabel from '../components/InputLabel';
import MyContext from '../context/MyContext';

const axios = require('axios').default;

function Login() {
  const { setToken } = useContext(MyContext);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const API_URL = 'http://localhost:3001';

  const registerUser = async () => {
    const body = { name, password };
    const result = await axios.post(`${API_URL}/user`, body);
    console.log(result.data.token);
    setToken(result.data.token);
  };

  return (
    <form>
      <InputLabel
        type="text"
        className="username_input"
        placeholder="Nome de usuário"
        onChange={({ target }) => setName(target.value)}
      />
      <InputLabel
        type="password"
        className="password_input"
        placeholder="Senha"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button
        type="button"
        onClick={registerUser}
      >
        Login
      </button>
      <div>
        <p>{name}</p>
      </div>
    </form>
  );
}

export default Login;
