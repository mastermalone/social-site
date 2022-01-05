import { Paper } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react';
import Form from '../../components/Form';
import MUIForm from '../../components/MUIForm';
import MUIFormContext from '../../components/MUIFormContext';
import useStyles from './styles';

interface ILoginPageTemplateProps {
  isLoggedIn: boolean;
}

const LoginPageTemplate = ({ isLoggedIn }: ILoginPageTemplateProps): JSX.Element => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <Box>
        <Paper>
          This is the login page
        </Paper>
      </Box>
      <div className={styles.spacer}>
        <strong>Standard React Hook Form, no MUI</strong>
      </div>
      <Box>
        <Form />
      </Box>
      <div className={styles.spacer}>
        <strong>React Hook Form, with MUI</strong>
      </div>
      <Box>
        <MUIForm />
      </Box>
      <div className={styles.spacer}>
        <strong>React Hook Form, with MUI and FormContext</strong>
      </div>
      <Box>
        <MUIFormContext />
      </Box>
    </div>
  )
};

export default LoginPageTemplate;