import React from 'react';
import Avatar from 'react-avatar';

// Componente semplice per mostrare l'avatar
function UserProfile({ email }) {
  // Gestisce il caso in cui l'email non sia ancora caricata
  const name = email ? email.split('@')[0] : '...';
  
  return (
    <div>
      <Avatar name={name} size="70" round={true} />
    </div>
  );
}

export default UserProfile;

