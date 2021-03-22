import { createUseStyles } from 'react-jss'
import { Colors } from '../../../constants/colors'
export const useStyles = createUseStyles({
  contaienr: {
    backgroundColor: Colors.primary,
    height: '40px',
    top: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  listContainer: {
    width: '90%',
    flexDirection: 'row-reverse',
    display: 'flex',
    padding: '0 10px'
  },
  iconContainer: {
    width: '10%',
  },
})
