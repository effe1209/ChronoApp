import React from 'react';
import Avatar from 'react-avatar';
import GlassSurface from './GlassSurface';
import { BiFontFamily } from 'react-icons/bi';

function UserProfile({ email, isDark}) {
  const name = email ? email.split('@')[0] : '...';
  
  return (
    <GlassSurface 
      /* 1. Adattiamo le dimensioni al genitore */
      width="100%" 
      height="100%"
      
      /* 2. IMPOSTIAMO IL BORDO A 20px (Num, non stringa %) */
      borderRadius={100} 
      
      /* Classe per rimuovere padding interno extra */
      className="glass-avatar-fix" 
      
      /* 3. Centratura Flexbox robusta */
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden' // Assicura che nulla esca dai bordi stondati
      }}
    >
      <Avatar 
        name={name} 
        size="70" 
        /* 4. L'Avatar deve seguire la stessa stondatura del vetro */
        round="20px" 
        color="transparent" 
        fgColor={isDark ? "#fff" : "#000"} 
        textSizeRatio={1.95}
        /* Rimuoviamo bordi dell'avatar che potrebbero creare doppi bordi */
        style={{ border: 'none', display: 'block', backdropFilter: 'brightness(10)', fontFamily: 'minork', fontWeight: 'bold' }}
      />
    </GlassSurface>
  );
}

export default UserProfile;