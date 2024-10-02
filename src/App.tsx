import { Outlet } from 'react-router-dom';
import MenuBurger from './components/MenuBurger.tsx';

import './App.css'

function App() {

  return (
    <main className='view_screen'>
      <nav className='view_screen_navbar'>
        <MenuBurger />
      </nav>
      <Outlet />
    </main>
  )
}

export default App
