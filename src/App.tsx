import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { NavBar, NavItem } from './components/Common/index'
import { About } from './components/Pages/index'

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <NavItem width={60} title="About" />
        </Link>
      </NavBar>
      <Switch>
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
