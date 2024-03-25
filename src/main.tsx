import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import invariant from 'invariant';
import App from './App';
import './index.css';

const root = document.getElementById('root');

invariant(root != null, 'Document must contain #root');

ReactDom.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
