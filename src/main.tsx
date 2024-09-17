import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../src/pages/Home.tsx';
import Ticketing from '../src/pages/Ticketing.tsx';
import Historic from '../src/pages/Historic.tsx';
import Contact from '../src/pages/Contact.tsx';
import App from './App.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <Home />
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
    ]
  // },
  // {
  //   path : '/billetterie',
  //   element : <Ticketing />
  // },
  // {
  //   path : '/historique',
  //   element : <Historic />
  // },
  // {
  //   path : '/contact',
  //   element : <Contact />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
