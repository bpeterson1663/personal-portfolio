import { createUseStyles } from 'react-jss'
import { Colors } from '../../../constants/colors'

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '0 10px',
    color: Colors.white,
    backgroundColor: Colors.primary,
    fontSize: '16px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: Colors.navHover,
      opacity: '.8',
    },
  },
})
