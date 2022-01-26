import { createStyles, makeStyles } from '@material-ui/core';

const useControlledAccordionStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '30px auto',
      width: '38%',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&>div': {
        marginBottom: theme.spacing(3),
      },
      '&>div>img': {
        display: 'block',
        borderRadius: theme.spacing(2),
        width: '100%',
      },
    },
  })
);

export default useControlledAccordionStyles;
