import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Ticketing from '../src/pages/Ticketing.tsx';
import Historic from '../src/pages/Historic.tsx';
import Contact from '../src/pages/Contact.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : '/billetterie',
    element : <Ticketing />
  },
  {
    path : '/historique',
    element : <Historic />
  },
  {
    path : '/contact',
    element : <Contact />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
