import { Outlet } from 'react-router-dom';
import MenuBurger from './components/MenuBurger.tsx';

import './App.css'

function App() {

  return (
    <main>
      <MenuBurger />
      <Outlet />
    </main>
  )
}

export default App
