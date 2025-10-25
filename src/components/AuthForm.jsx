import React from 'react';

const AuthForm = ({
  nickname,
  setNickname,
  email,
  setEmail,
  password,
  setPassword,
  handleRegister,
  handleLogin,
  handleKeyDown
}) => {
  return (
    <div className="form">
      <h2>Registrati o Accedi</h2>
      {/* Nota: type="nickname" non è standard HTML, userà il fallback a "text" */}
      <input
        type="text" 
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="button-group">
        <div className="buttonForm">
          <button onClick={handleRegister}>Registrati</button>
          <button onClick={handleLogin}>Accedi</button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;