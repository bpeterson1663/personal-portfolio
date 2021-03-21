import React from 'react'
import { useStyles } from './NavBar.styles'
import { NavItem } from '../NavItem/NavItem'
import { FaHome } from 'react-icons/fa'

export const NavBar: React.FC = ({ children }): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.contaienr}>
      <div className={classes.iconContainer}>
        <NavItem width={50}>
          <FaHome />
        </NavItem>
      </div>
      <div className={classes.listContainer}>{children}</div>
    </div>
  )
}
