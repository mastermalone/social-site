import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Box, Button } from '@material-ui/core';
import ControlledTextField from '../../../Form/ControlledTextField';
import { State } from '../../store/MultiStepStore';

interface StepTwoProps {
  formSubmitHandler: SubmitHandler<State>;
  state: State;
  prev: () => void;
}

const StepTwoTemplate: React.FC<StepTwoProps> = ({
  formSubmitHandler,
  prev,
  state,
}) => {
  const schema = yup.object().shape({
    firstName: yup.string().min(4).max(20).required(''),
    lastName: yup.string().required('Username is required'),
    age: yup.number().min(18).max(120).required('Age is required'),
  });
  const methods = useForm<State>({
    resolver: yupResolver(schema),
    defaultValues: state,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
        <Box>
          <ControlledTextField
            defaultValue=""
            label="Enter your first name"
            name="firstName"
            type="text"
          />
          <ControlledTextField
            defaultValue=""
            label="Enter your last name"
            name="lastName"
            type="text"
          />
          <ControlledTextField
            defaultValue=""
            label="Enter your age"
            name="age"
            type="text"
          />
          <Box>
            <Button
              variant="outlined"
              color="secondary"
              type="button"
              onClick={prev}
            >
              Prev
            </Button>
            <Button variant="contained" color="secondary" type="submit">
              Next
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default StepTwoTemplate;
