import { createUseStyles } from 'react-jss'
import { Colors } from '../../../constants/colors'

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.secondary,
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexFlow: 'row wrap',
    width: '100%',
    minHeight: '100%',
  },
})
