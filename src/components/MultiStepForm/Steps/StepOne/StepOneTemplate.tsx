import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';


import { Box, Button } from '@material-ui/core';
import ControlledTextField from '../../../Form/ControlledTextField';
import { initialState, State } from '../../store/MultiStepStore';

interface StepOneProps {
  formSubmitHandler: SubmitHandler<State>
}

const StepOneTemplate: React.FC<StepOneProps> = ({ formSubmitHandler }) => {
  const schema = yup.object().shape({
    password: yup.string().min(4).max(20).required(''),
    username: yup.string().required('Username is required'),
    // firstName: yup.string().required('First name is required'),
    // lastName: yup.string().required('Last name is required'),
    // age: yup.number(),
    // email: yup.string().email().required('Username is required'),
    // address: yup.string().required('Address is required'),
    // phoneNumber: yup.string().required('Username is required'),
  })

  const methods = useForm<State>({
    resolver: yupResolver(schema),
    defaultValues: initialState,
  });
  return (

    <FormProvider  {...methods}>
      <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
        <Box>
          <ControlledTextField
            defaultValue=''
            label='Enter your user name'
            name='username'
            type='text'
          />
          <ControlledTextField
            defaultValue=''
            label='Enter your password'
            name='password'
            type='password'
          />

          <Button
            variant='contained'
            color='secondary'
            // onClick={onClick}
            type='submit'
          >
            Next
          </Button>
        </Box>
      </form>
    </FormProvider>

  )

};

export default StepOneTemplate;