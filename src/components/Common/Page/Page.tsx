import React from 'react'
import { useStyles } from './Page.styles'

interface PageT {
  title: string
}
export const Page: React.FC<PageT> = ({ title, children }): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
