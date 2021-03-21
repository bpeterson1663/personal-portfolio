import React from 'react'
import { useStyles } from './NavItem.styles'

interface NavItemT {
  width?: number
  title?: string
  onClick?: () => void
}
export const NavItem: React.FC<NavItemT> = ({ children, width, title, onClick }): JSX.Element => {
  const classes = useStyles()
  return (
    <div onClick={onClick} className={classes.container} style={{ width: width }}>
      {title}
      {children}
    </div>
  )
}
