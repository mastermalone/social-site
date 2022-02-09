import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '30px auto',
    },
    video: {
      width: '100%',
      maxHeight: 565,
      aspectRatio: '16/9',
      display: 'block',
    },
    cardInfo: {
      background: '#333',
      padding: 12,
      color: '#fff',
      textAlign: 'left',
    },
    chips: {
      marginBottom: 12,
      display: 'flex',
      flexDirection: 'row',
      '&>div': {
        marginRight: 12,
      },
    },
  })
);

export default useStyles;
