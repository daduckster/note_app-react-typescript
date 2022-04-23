import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);