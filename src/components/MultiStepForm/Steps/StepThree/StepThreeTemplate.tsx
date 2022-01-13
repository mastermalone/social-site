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
  state,
  prev,
}) => {
  const schema = yup.object().shape({
    address: yup.string().required('Address is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    email: yup.string().email().required('Email is required'),
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
            label="Enter your address"
            name="address"
            type="text"
          />
          <ControlledTextField
            defaultValue=""
            label="Enter your phone number"
            name="phoneNumber"
            type="text"
          />
          <ControlledTextField
            defaultValue=""
            label="Enter your email address"
            name="email"
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
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default StepTwoTemplate;
