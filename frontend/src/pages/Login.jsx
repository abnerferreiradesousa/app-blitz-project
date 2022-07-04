import React from 'react';
import InputLabel from '../components/InputLabel';

function Login() {
  return (
    <form>
      <InputLabel
        type="text"
        className="username_input"
        placeholder="Nome de usuário"
      />
      <InputLabel
        type="password"
        className="password_input"
        placeholder="Senha"
      />
      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
