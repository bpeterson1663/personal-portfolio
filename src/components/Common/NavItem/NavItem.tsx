import React from 'react'
import { useStyles } from './NavItem.styles'

interface NavItemT {
  title?: string
  onClick?: () => void
}
export const NavItem: React.FC<NavItemT> = ({ children, title, onClick }): JSX.Element => {
  const classes = useStyles()
  return (
    <div onClick={onClick} className={classes.container}>
      {title}
      {children}
    </div>
  )
}
