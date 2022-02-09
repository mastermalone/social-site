import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '30px auto',
      maxWidth: 1000,
    },
    lightGalleryContainer: {
      margin: '30px auto',
      maxWidth: 1000,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    galleryTileContainer: {
      '&>div': {
        display: 'flex',
        justifyContent: 'flex-start',
      },
    },
    galleryImage: {
      width: 200,
      display: 'block',
      marginRight: theme.spacing(3),
      '&>img': {
        display: 'block',
        width: '100%',
      },
    },
    galleryItemTitle: {
      padding: theme.spacing(4),
    },
    loadingIndicator: {
      margin: '0 auto',
      width: 120,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    loadingIcon: {
      animation: '$spin 4s linear infinite',
      color: theme.palette.grey[400],
    },
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(360deg)',
      },
      '100%': {
        transform: 'rotate(0deg)',
      },
    },
  })
);

export default useStyles;
