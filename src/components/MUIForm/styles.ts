import { createStyles, makeStyles } from '@material-ui/core'

const useMUIFormStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '0 aut',
    },
    field: {
      margin: theme.spacing(2, 0),
    },
  }),
)

export default useMUIFormStyles
