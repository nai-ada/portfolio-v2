import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <main className="light bg-lightBackground">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>,
);