import { Outlet } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

import MenuBurger from './components/MenuBurger.tsx';

import './App.css'

function App() {

  return (
    <main className='view_screen'>
      <nav className='view_screen_navbar'>
        <MenuBurger />
      </nav>
      <Outlet />
      <SpeedInsights />
      <Analytics />
    </main>
  )
}

export default App
