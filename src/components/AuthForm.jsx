import React, { useState } from 'react';
import './componentCSS/AuthForm.css'; 
import Iridescence from './Iridescence';

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
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-form-container">
      
      {/* 1. Layer dello Sfondo */}
      <div className="auth-background">
        {/* Nota critica: Assicurati che il componente Iridescence supporti
           width/height al 100% del genitore. Spesso i canvas WebGL 
           richiedono dimensioni esplicite o style={{width: '100%', height: '100%'}} 
        */}
        <Iridescence
          color={[0.5, 0.8, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
          style={{ width: '100%', height: '100%' }} // Forzatura dimensioni inline per sicurezza
        />
      </div>

      {/* 2. Layer del Contenuto (Form) */}
      <div className="auth-content">
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          {isLogin ? 'Accedi' : 'Registrati'}
        </h2>
        
        <div className="form-group">
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
          <button 
            className="primary-btn"
            style={{ width: '100%', padding: '10px', cursor: 'pointer' }}
            onClick={isLogin ? handleLogin : handleRegister}
          >
            {isLogin ? 'Login' : 'Registrati'}
          </button>

          <p className="toggle-text" style={{ textAlign: 'center', marginTop: '15px' }}>
            {isLogin ? "Non hai un account?" : "Hai già un account?"}{' '}
            <span 
              className="toggle-link" 
              style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Creane uno' : 'Accedi'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;