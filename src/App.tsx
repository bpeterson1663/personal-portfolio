import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { NavBar, NavItem } from './components/Common/index'
import { About, Home , Projects, Experience, Contact} from './components/Pages/index'

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <NavItem title="Contact" />
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <NavItem title="About" />
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <NavItem title="Projects" />
        </Link>
        <Link to="/experience" style={{ textDecoration: 'none' }}>
          <NavItem title="Experience" />
        </Link>
      </NavBar>
      <Switch>
        <Route path="/experience" exact component={Experience} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
