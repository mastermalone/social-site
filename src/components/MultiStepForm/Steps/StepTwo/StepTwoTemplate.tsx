import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';


import { Box, Button } from '@material-ui/core';
import ControlledTextField from '../../../Form/ControlledTextField';
import { initialState, State } from '../../store/MultiStepStore';

interface StepTwoProps {
  formSubmitHandler: SubmitHandler<State>
}

const StepTwoTemplate: React.FC<StepTwoProps> = ({ formSubmitHandler }) => {
  const schema = yup.object().shape({
    firstName: yup.string().min(4).max(20).required(''),
    lastName: yup.string().required('Username is required'),
    age: yup.number().min(18).max(120).required('Age is required'),
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
            label='Enter your first name'
            name='firstName'
            type='text'
          />
          <ControlledTextField
            defaultValue=''
            label='Enter your last name'
            name='lastName'
            type='text'
          />
          <ControlledTextField
            defaultValue=''
            label='Enter your age'
            name='age'
            type='text'
          />

          <Button
            variant='contained'
            color='secondary'
            type='submit'
          >
            Next
          </Button>
        </Box>
      </form>
    </FormProvider>

  )

};

export default StepTwoTemplate;