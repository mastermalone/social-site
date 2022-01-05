import { createStyles, makeStyles } from '@material-ui/core'

const useMUIFormContextStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '0 auto',
    },
    field: {
      margin: theme.spacing(2, 0),
    },
  }),
)

export default useMUIFormContextStyles
