import { Component, StrictMode, type ErrorInfo, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

class AppErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  private readonly appContent: ReactNode;

  constructor(props: { children: ReactNode }) {
    super(props);
    this.appContent = props.children;
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '32px 24px',
          boxSizing: 'border-box',
          background: '#F4F2EB',
          color: '#1B2A26',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 420 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#596861' }}>
              Akshat Jain · Product Marketing
            </p>
            <h1 style={{ margin: '16px 0', fontFamily: 'Georgia, serif', fontSize: 36, lineHeight: 1.05 }}>
              This page hit a snag.
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#596861' }}>
              The portfolio couldn’t finish rendering in this browser. Please reload the page to try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                marginTop: 20,
                border: 0,
                borderRadius: 999,
                padding: '13px 22px',
                background: '#344F44',
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: 650,
                cursor: 'pointer',
              }}
            >
              Reload portfolio
            </button>
          </div>
        </main>
      );
    }

    return this.appContent;
  }
}

const root = document.getElementById('root');
if (!root) {
  throw new Error('Portfolio root element was not found.');
}

createRoot(root).render(
  <StrictMode>
    <AppErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppErrorBoundary>
  </StrictMode>
);
