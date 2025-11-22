    const BackgroundLayer = useMemo(() => {
      return (
        <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw',
            // height: '100vh', 
            height: '100dvh',
            zIndex: -1,
            pointerEvents: 'none',
            backgroundColor: floatingConfig.bg, // Usa il colore configurato
            transition: "background-color 0.3s ease",
            touchAction: 'none'
        }}>
          <FloatingLines 
            linesGradient={floatingConfig.gradient} // Usa il gradiente configurato
            mixBlendMode={floatingConfig.blend}     // Usa il blend configurato
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[5, 5, 5]}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={false} // Se true, attenzione che il mouse potrebbe triggerare render
            parallax={true}
          />
        </div>
      );
    }, [isDark, floatingConfig.bg, floatingConfig.blend]);
