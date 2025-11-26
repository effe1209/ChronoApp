import React, { useState, useMemo } from 'react';
import './componentCSS/AuthForm.css'; 
// import Iridescence from './Iridescence'; // Non usato in questa versione
// import Plasma from './Plasma';         // Non usato in questa versione
import FloatingLines from './FloatingLines';

const AuthForm = ({
  nickname,
  setNickname,
  email,
  setEmail,
  password,
  setPassword,
  handleRegister,
  handleLogin,
  handleKeyDown,
  isDark // Assicurati che il genitore passi questa prop
}) => {
  const [isLogin, setIsLogin] = useState(true);

  // 1. Configurazione spostata DENTRO il componente
  // Usiamo useMemo anche qui per evitare di ricreare l'oggetto a ogni render
  const floatingConfig = useMemo(() => {
    return isDark 
      ? {bg: "#001036ff", gradient: ["#F59E0B"],blend: "screen"}// Config Dark
      : { bg: "#476d7ed6", gradient: ["#ff8ce2ff", "#77bebaff"], blend: "screen" }; // Config Light
  }, [isDark]);

  // 2. Il BackgroundLayer deve stare dentro (o essere un componente a parte)
  // Memoizziamo il render del background per evitare re-render pesanti quando scrivi negli input
  const backgroundLayer = useMemo(() => {
    return (
      <div style={{ 
          position: 'absolute', // Meglio absolute di fixed se vogliamo che stia nel form container
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0, // Base level
          pointerEvents: 'none', // Importante: lascia passare i click
          backgroundColor: floatingConfig.bg,
          transition: "background-color 0.3s ease",
          overflow: 'hidden',
          borderRadius: 'inherit' // Eredita il bordo arrotondato del genitore
      }}>
        <FloatingLines 
          linesGradient={floatingConfig.gradient} 
          mixBlendMode={floatingConfig.blend}     
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[5, 5, 5]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={false}
          parallax={true}
        />
      </div>
    );
  }, [floatingConfig]); // Si aggiorna solo se cambia la config (quindi isDark)

  return (
    // Assicurati che .auth-form-container nel CSS abbia position: relative;
    <div className="auth-form-container" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Layer dello Sfondo */}
      {backgroundLayer}

      {/* Layer del Contenuto */}
      <div className="auth-content" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ textAlign: 'center', margin: 'auto', color: isDark ? '#fff' : '#000' }}>
          {isLogin ? 'Accedi' : 'Registrati'}
        </h2>
        
        <div className="form-group">
          {!isLogin && (
            <div className="input-wrapper">
              <label htmlFor="nickname" style={{ color: isDark ? '#ddd' : '#333' }}>Nickname</label>
              <input
                id="nickname"
                type="text"
                placeholder="Il tuo nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                onKeyDown={handleKeyDown}
                // Stile condizionale rapido per leggibilità (meglio spostare in CSS)
                style={isDark ? { color: '#ffffffff' } : { color: '#000000ff' }}
              />
            </div>
          )}

          <div className="input-wrapper">
            <label htmlFor="email" style={{ color: isDark ? '#ddd' : '#333' }}>Email</label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              style={isDark ? { color: '#ffffffff' } : { color: '#000000ff' }}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password" style={{ color: isDark ? '#ddd' : '#333' }}>Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ color: '#000' }}
            />
          </div>
        </div>

        <div className="actions">
          <button 
            className="primary-btn"
            style={{ width: '100%', padding: '10px', cursor: 'pointer', marginTop: '1rem' }}
            onClick={isLogin ? handleLogin : handleRegister}
          >
            {isLogin ? 'Login' : 'Registrati'}
          </button>

          <p className="toggle-text" style={{ textAlign: 'center', marginTop: '15px', color: isDark ? '#ccc' : '#333' }}>
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