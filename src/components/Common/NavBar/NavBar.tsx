import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './NavBar.styles'
import { NavItem } from '../NavItem/NavItem'
import { FaHome } from 'react-icons/fa'

export const NavBar: React.FC = ({ children }): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.contaienr}>
      <div className={classes.iconContainer}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <NavItem width={50}>
            <FaHome />
          </NavItem>
        </Link>
      </div>
      <div className={classes.listContainer}>{children}</div>
    </div>
  )
}
