import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Box, Button } from '@material-ui/core';
import ControlledTextField from '../../../Form/ControlledTextField';
import { State } from '../../store/MultiStepStore';
import useStyles from '../../styles';
interface StepOneProps {
  formSubmitHandler: SubmitHandler<State>;
  state: State;
}

const StepOneTemplate: React.FC<StepOneProps> = ({
  formSubmitHandler,
  state,
}) => {
  const schema = yup.object().shape({
    password: yup.string().min(4).max(20).required(''),
    username: yup.string().required('Username is required'),
  });

  const methods = useForm<State>({
    resolver: yupResolver(schema),
    defaultValues: state,
  });

  const styles = useStyles();
  return (
    <FormProvider {...methods}>
      <Box className={styles.formStyle}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          <Box>
            <ControlledTextField
              defaultValue=""
              label="Enter your user name"
              name="username"
              type="text"
              className={styles.textField}
            />
            <ControlledTextField
              defaultValue=""
              label="Enter your password"
              name="password"
              type="password"
              className={styles.textField}
            />
            <Button variant="contained" color="secondary" type="submit">
              Next
            </Button>
          </Box>
        </form>
      </Box>
    </FormProvider>
  );
};

export default StepOneTemplate;
