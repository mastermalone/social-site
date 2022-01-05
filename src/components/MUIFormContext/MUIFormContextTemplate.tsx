/**
 * TUTORIAL found here:
 * https://youtu.be/nt8NTuUbuG4
 */
import React from 'react'
import {
  useForm,
  SubmitHandler,
  FormProvider,
} from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Box, Button } from '@material-ui/core'
import useMUIFormContextStyles from './styles'
import ControlledTextField from '../Form/ControlledTextField'

interface IMUIFormContextProps {
  email: string;
  password: string;
}

/**
 * @since 1.0.0
 * @summary This example shows us how to use react hook form with 
 * the <FormProvider /> wrapper.  This is used to provide the 
 * form state and other form functionality from
 * react hook form to the child components within it's tree.
 * In order for the child components to consume the form state 
 * and other goodies form useForm(), the child components need to
 * implement the useFormContext() hook and destructure  the formState
 * control, and other bits of functionality from that hook.
 * @returns {React.FC}
 */
const MUIFormContextTemplate: React.FC = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required('The email address is required'),
    password: yup.string().min(4).max(20).required(''),
  });


  /**
   * Instead of destructuring this, we store all the functionality from
   * useForm in this methods variable.  We will spread this into the
   * <FormProvider> component for sharing purposing
   */
  const methods = useForm<IMUIFormContextProps>({
    resolver: yupResolver(schema)
  });

  const formSubmitHandler: SubmitHandler<IMUIFormContextProps> = (data: IMUIFormContextProps) => {
    console.log('The data from the context version', data)
  }

  const styles = useMUIFormContextStyles();

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          <ControlledTextField
            defaultValue=''
            label='Enter your email address'
            name='email'
            type='email'
          />
          <ControlledTextField
            defaultValue=''
            label='Please enter your password'
            name='password'
            type='password'
          />
          <Box className={styles.field}>
            <Button
              variant='contained'
              color='secondary'
              type='submit'
            >Submit</Button>
          </Box>
        </form>
      </FormProvider>
    </Box>
  )
};

export default MUIFormContextTemplate;