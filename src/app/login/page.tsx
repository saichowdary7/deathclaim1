'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const DEMO_CREDENTIALS = {
    username: 'admin',
    password: 'Admin@123456'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
        router.push('/master');
      } else {
        setError('Invalid credentials. Please check the demo details below.');
      }
    } catch {
      setError('An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const autoFill = () => {
    setUsername(DEMO_CREDENTIALS.username);
    setPassword(DEMO_CREDENTIALS.password);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f4fd 0%, #d6eaf8 50%, #c8e6f5 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        background: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,80,160,0.15)',
        display: 'flex',
        overflow: 'hidden',
        minHeight: '520px',
      }}>

        {/* LEFT — Illustration Panel */}
        <div style={{
          flex: '1',
          background: 'linear-gradient(160deg, #dceeff 0%, #b8d9f8 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2.5rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute', top: '-40px', left: '-40px',
            width: '180px', height: '180px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-30px', right: '-30px',
            width: '140px', height: '140px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
          }} />

          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem', zIndex: 1 }}>
            <div style={{
              width: '70px', height: '70px', borderRadius: '16px',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1rem',
              boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
            }}>
              {/* Shield + cross icon */}
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                <path d="M19 3L5 9v10c0 8.5 6 16.4 14 18.3C27 35.4 33 27.5 33 19V9L19 3z" fill="white" fillOpacity="0.9" />
                <rect x="16.5" y="11" width="5" height="16" rx="2" fill="#2563eb" />
                <rect x="11" y="16.5" width="16" height="5" rx="2" fill="#2563eb" />
              </svg>
            </div>
            <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '700', color: '#1e3a6e' }}>
              Death Claim
            </h2>
            <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#3b6ea8', fontWeight: '500' }}>
              Online Portal
            </p>
          </div>

          {/* Family SVG Illustration */}
          <div style={{ zIndex: 1, width: '100%', maxWidth: '280px' }}>
            <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Hands (cupped) */}
              <ellipse cx="140" cy="215" rx="90" ry="18" fill="#93c5fd" fillOpacity="0.5" />
              <path d="M60 200 Q70 190 90 195 Q110 200 140 200 Q170 200 190 195 Q210 190 220 200 Q225 210 220 215 Q170 225 140 225 Q110 225 60 215 Z" fill="#bfdbfe" />

              {/* Father */}
              <circle cx="155" cy="100" r="18" fill="#f5d0a9" />
              <rect x="138" y="118" width="34" height="45" rx="8" fill="#9ca3af" />
              <rect x="130" y="120" width="12" height="30" rx="6" fill="#9ca3af" />
              <rect x="178" y="120" width="12" height="30" rx="6" fill="#9ca3af" />
              {/* glasses */}
              <rect x="145" y="97" width="10" height="7" rx="3" fill="none" stroke="#374151" strokeWidth="1.5" />
              <rect x="158" y="97" width="10" height="7" rx="3" fill="none" stroke="#374151" strokeWidth="1.5" />
              <line x1="155" y1="101" x2="158" y2="101" stroke="#374151" strokeWidth="1.2" />

              {/* Mother */}
              <circle cx="120" cy="102" r="16" fill="#f5d0a9" />
              <path d="M104 120 Q112 116 120 118 Q128 116 136 120 L134 165 Q120 168 106 165 Z" fill="#ef4444" fillOpacity="0.75" />
              {/* hair */}
              <path d="M105 100 Q108 88 120 86 Q132 88 135 100" fill="#4b2c0a" />

              {/* Son (left) */}
              <circle cx="90" cy="130" r="13" fill="#f5d0a9" />
              <rect x="79" y="143" width="22" height="32" rx="6" fill="#92400e" fillOpacity="0.8" />
              {/* hair */}
              <path d="M78 128 Q82 118 90 117 Q98 118 102 128" fill="#4b2c0a" />

              {/* Daughter (right) */}
              <circle cx="178" cy="138" r="12" fill="#f5d0a9" />
              <path d="M167 150 Q172 147 178 148 Q184 147 189 150 L188 182 Q178 185 168 182 Z" fill="#3b82f6" fillOpacity="0.7" />
              {/* ponytail */}
              <path d="M178 128 Q186 126 188 132" stroke="#4b2c0a" strokeWidth="3" fill="none" strokeLinecap="round" />

              {/* Floating insurance icons */}
              {/* Home */}
              <rect x="60" y="55" width="38" height="38" rx="10" fill="white" fillOpacity="0.85" />
              <path d="M70 79 L70 69 L79 61 L88 69 L88 79 Z" fill="#fbbf24" />
              <rect x="75" y="72" width="8" height="7" rx="1" fill="#1d4ed8" />

              {/* Car */}
              <rect x="8" y="100" width="40" height="38" rx="10" fill="white" fillOpacity="0.85" />
              <rect x="16" y="115" width="24" height="12" rx="4" fill="#3b82f6" />
              <circle cx="20" cy="128" r="3" fill="#1e3a6e" />
              <circle cx="36" cy="128" r="3" fill="#1e3a6e" />

              {/* Education */}
              <rect x="195" y="48" width="38" height="38" rx="10" fill="white" fillOpacity="0.85" />
              <path d="M214 58 L228 64 L214 70 L200 64 Z" fill="#3b82f6" />
              <rect x="211" y="70" width="6" height="8" rx="1" fill="#fbbf24" />

              {/* Shield */}
              <rect x="234" y="95" width="38" height="38" rx="10" fill="white" fillOpacity="0.85" />
              <path d="M253 104 L244 108 L244 116 Q244 122 253 126 Q262 122 262 116 L262 108 Z" fill="#fbbf24" />
              <path d="M253 104 L244 108 L244 116 Q244 122 253 126 Q262 122 262 116 L262 108 Z" fill="none" stroke="#1d4ed8" strokeWidth="1.5" />

              {/* Heart */}
              <rect x="232" y="148" width="38" height="38" rx="10" fill="white" fillOpacity="0.85" />
              <path d="M251 172 Q246 165 246 161 Q246 157 251 157 Q253 157 251 160 Q249 157 253 157 Q258 157 258 161 Q258 165 251 172 Z" fill="#fbbf24" />

              {/* Dashed lines from family to icons */}
              <line x1="90" y1="115" x2="79" y2="80" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
              <line x1="90" y1="130" x2="48" y2="120" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
              <line x1="155" y1="95" x2="214" y2="75" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
              <line x1="165" y1="110" x2="248" y2="114" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
              <line x1="170" y1="138" x2="247" y2="160" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
            </svg>
          </div>

          <p style={{
            marginTop: '1rem', fontSize: '0.8rem', color: '#3b6ea8',
            textAlign: 'center', zIndex: 1, lineHeight: 1.5,
          }}>
            Protecting families through<br />every life stage
          </p>
        </div>

        {/* RIGHT — Login Form */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '3rem 2.5rem',
        }}>
          <h1 style={{
            margin: '0 0 6px', fontSize: '1.8rem', fontWeight: '700',
            color: '#1e3a6e', letterSpacing: '-0.3px',
          }}>
            Login
          </h1>
          <p style={{ margin: '0 0 2rem', fontSize: '0.875rem', color: '#6b7280' }}>
            If you are already a member, you can easily login.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {error && (
              <div style={{
                background: '#fef2f2', border: '1px solid #fecaca',
                borderRadius: '8px', padding: '10px 14px',
                color: '#dc2626', fontSize: '0.85rem',
              }}>
                {error}
              </div>
            )}

            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                style={{
                  width: '100%', padding: '12px 16px',
                  border: '1.5px solid #e5e7eb', borderRadius: '10px',
                  fontSize: '0.95rem', outline: 'none', color: '#374151',
                  background: '#f9fafb', boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = '#3b82f6')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                style={{
                  width: '100%', padding: '12px 16px',
                  border: '1.5px solid #e5e7eb', borderRadius: '10px',
                  fontSize: '0.95rem', outline: 'none', color: '#374151',
                  background: '#f9fafb', boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = '#3b82f6')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%', padding: '13px',
                background: isLoading ? '#93c5fd' : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: 'white', fontWeight: '600', fontSize: '1rem',
                border: 'none', borderRadius: '10px', cursor: isLoading ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 14px rgba(37,99,235,0.35)',
                transition: 'opacity 0.2s, transform 0.1s',
              }}
              onMouseOver={e => !isLoading && ((e.target as HTMLButtonElement).style.opacity = '0.92')}
              onMouseOut={e => ((e.target as HTMLButtonElement).style.opacity = '1')}
            >
              {isLoading ? 'Signing in...' : 'Login'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div style={{
            marginTop: '2rem',
            background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
            border: '1px solid #bfdbfe',
            borderRadius: '12px',
            padding: '1.1rem 1.25rem',
          }}>
            <p style={{ margin: '0 0 8px', fontSize: '0.8rem', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Demo Credentials
            </p>
            <div style={{ fontSize: '0.85rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#6b7280', minWidth: '75px' }}>Username:</span>
                <span style={{ fontFamily: 'monospace', fontWeight: '600', color: '#1d4ed8' }}>{DEMO_CREDENTIALS.username}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#6b7280', minWidth: '75px' }}>Password:</span>
                <span style={{ fontFamily: 'monospace', fontWeight: '600', color: '#1d4ed8' }}>{DEMO_CREDENTIALS.password}</span>
              </div>
            </div>
            <button
              onClick={autoFill}
              style={{
                marginTop: '10px', width: '100%',
                background: '#2563eb', color: 'white',
                border: 'none', borderRadius: '8px',
                padding: '8px', fontSize: '0.82rem',
                fontWeight: '600', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseOver={e => ((e.target as HTMLButtonElement).style.background = '#1d4ed8')}
              onMouseOut={e => ((e.target as HTMLButtonElement).style.background = '#2563eb')}
            >
              Auto-fill Credentials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}