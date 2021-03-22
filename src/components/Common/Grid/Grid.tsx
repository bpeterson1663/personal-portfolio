import React from 'react'
import { useStyles } from './Grid.styles'

export const Grid: React.FC = ({ children }): JSX.Element => {
  const classes = useStyles()
  return <div className={classes.container}>{children}</div>
}
