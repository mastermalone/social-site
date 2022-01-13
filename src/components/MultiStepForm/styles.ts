import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '0 auto',
    },
    formStyle: {
      width: '30%',
      margin: '30px auto',
    },
    textField: {
      width: '100%',
    },
    controls: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      width: '45%',
    },
  })
);

export default useStyles;
