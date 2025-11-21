import React, { useState } from 'react';
import './componentCSS/AuthForm.css'; // Ho aggiunto un file CSS opzionale per un minimo di stile

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
  // Stato locale per gestire la visualizzazione (Login vs Registrazione)
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-form-container">
      <h2>{isLogin ? 'Accedi' : 'Registrati'}</h2>
      
      <div className="form-group">
        {/* Il campo Nickname appare solo se siamo in fase di registrazione */}
        {!isLogin && (
          <div className="input-wrapper">
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              type="text"
              placeholder="Il tuo nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        )}

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="actions">
        {/* Il bottone esegue l'azione corretta in base allo stato locale */}
        <button 
          className="primary-btn"
          onClick={isLogin ? handleLogin : handleRegister}
        >
          {isLogin ? 'Login' : 'Registrati'}
        </button>

        <p className="toggle-text">
          {isLogin ? "Non hai un account?" : "Hai già un account?"}{' '}
          <span 
            className="toggle-link" 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Creane uno' : 'Accedi'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;