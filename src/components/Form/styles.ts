import { createStyles, makeStyles } from '@material-ui/core'

const useFormStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '0 auto',
    },
    field: {
      padding: theme.spacing(2, 1),
      display: 'block',
      border: 'solid 1px #666666',
      borderRadius: theme.spacing(1),
      margin: theme.spacing(2, 0),
    },
    submit: {
      display: 'block',
      padding: theme.spacing(1.5, 2),
      borderRadius: '5px',
      border: 'solid 1px #1F5EFF',
      background: '#1F5EFF',
      color: '#fff',
      fontSize: '0.875rem',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 3px 3px #ccc',
      },
      textTransform: 'uppercase',
    },
    error: {
      color: '#ff0000',
      display: 'block',
      marginBottom: theme.spacing(2),
    },
  }),
)

export default useFormStyles
