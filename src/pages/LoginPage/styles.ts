import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '0 auto',
      width: '90%',
      padding: theme.spacing(2),
    },
    spacer: {
      marginTop: theme.spacing(3),
    },
  }),
)

export default useStyles
