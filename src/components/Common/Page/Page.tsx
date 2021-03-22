import React from 'react'
import { useStyles } from './Page.styles'

interface PageT {
  title: string
}
export const Page: React.FC<PageT> = ({ title, children }): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>{title}</h1>
      </div>
      <div className={classes.subContainer}>{children}</div>
    </div>
  )
}
