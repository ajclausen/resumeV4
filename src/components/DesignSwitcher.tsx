import React from 'react';

export const DesignSwitcher: React.FC<{ current: 'original' | 'agency' }> = ({ current }) => {
  const isOriginal = current === 'original';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 9999,
        display: 'flex',
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '14px',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '4px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '12px',
        letterSpacing: '0.04em',
      }}
    >
      <a
        href="/"
        onClick={(e) => { if (isOriginal) e.preventDefault(); }}
        style={{
          padding: '8px 16px',
          borderRadius: '10px',
          textDecoration: 'none',
          transition: 'all 0.25s ease',
          color: isOriginal ? '#2dd4bf' : 'rgba(255,255,255,0.5)',
          background: isOriginal ? 'rgba(45,212,191,0.12)' : 'transparent',
          fontWeight: isOriginal ? 700 : 500,
          cursor: isOriginal ? 'default' : 'pointer',
        }}
      >
        Original
      </a>
      <a
        href="/agency"
        onClick={(e) => { if (!isOriginal) e.preventDefault(); }}
        style={{
          padding: '8px 16px',
          borderRadius: '10px',
          textDecoration: 'none',
          transition: 'all 0.25s ease',
          color: !isOriginal ? '#c9956b' : 'rgba(255,255,255,0.5)',
          background: !isOriginal ? 'rgba(201,149,107,0.12)' : 'transparent',
          fontWeight: !isOriginal ? 700 : 500,
          cursor: !isOriginal ? 'default' : 'pointer',
        }}
      >
        Agency
      </a>
    </div>
  );
};
