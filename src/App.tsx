import React from 'react'
import { NavBar, NavItem } from './components/Common/index'
const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <NavBar>
        <NavItem width={60} title="About" />
      </NavBar>
    </div>
  )
}

export default App
