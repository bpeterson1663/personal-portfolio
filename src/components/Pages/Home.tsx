import React from 'react'
import { createUseStyles } from 'react-jss'
import { Page, Grid } from '../Common/index'
import ProfileImage from '../../images/profile.jpeg'

const useStyles = createUseStyles({
  avatar: {
    width: '250px',
    height: '250px',
    margin: '0 auto',
    objectFit: 'cover',
    borderRadius: '50%',
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
})
export const Home: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Page title="Brady J Peterson">
      <Grid>
        <img className={classes.avatar} src={ProfileImage} />
      </Grid>
      <Grid>
        <h2>Biography</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Grid>
    </Page>
  )
}
