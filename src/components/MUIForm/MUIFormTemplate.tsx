/**
 * TUTORIAL found here:
 * https://youtu.be/nt8NTuUbuG4
 */
import React, { useMemo } from 'react'
import {
  useForm,
  SubmitHandler,
  Controller,
} from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useMUIFormStyles from './styles'
import { Box, Button, TextField } from '@material-ui/core'

interface IMUIFormInputs {
  email: string
  password: string
}

const MUIFormTemplate = (): JSX.Element => {
  const styles = useMUIFormStyles()

  const schema = yup.object().shape({
    email: yup.string().email().required('The email is required'),
    password: yup.string().min(4).max(20).required(''),
  })

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IMUIFormInputs>({
    resolver: yupResolver(schema),
  })

  const formSubmitHandler: SubmitHandler<IMUIFormInputs> = (
    data: IMUIFormInputs,
  ) => {
    console.log('The submitted data', data)
  }

  /**
   * You can watch a specific field if you ike using the 'watch' function
   * @example
   * watch('email')
   */

  useMemo(() => {
    watch('email')
  }, [watch])
  /**
   * Using the Controller HOC allows you to control MUI components
   * from react-hook-form just as you would with a built in elements
   * such as an <input />
   * The attributes you supply on the <Controller /> get spread
   * to the <TextField /> component via the {field} key from the 
   * render() method as seen below
   * 
   * The helperText attribute is used to display errors triggered by the 
   * validation schema combined with react-hook-form's formState.errors
   * 
   * Providing the fields to the yup schema along with an interface to 
   * useForm<IMUIForm> allows the the errors object to
   * contain the key name which matches the field that currently 
   * has an error.  
   * @example:  
   * If there is an error on the 'email' field, the formState.errors 
   * object will contain an 'email' key with a 'message' property containing
   * a message from the validation yup schema
   */
  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <Box className={styles.field}>
        <Controller
          name='email'
          control={control}
          defaultValue='mastermalone1@live.com' // Need this to prevent the controlled input error
          render={({ field }) => (
            <TextField
              label='Enter your email address'
              variant='outlined'
              type='email'
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
              {...field}
            />
          )}
        />
      </Box>
      <Box className={styles.field}>
        <Controller
          name='password'
          defaultValue='' // Need this to prevent the controlled input error
          control={control}
          render={({ field }) => (
            <TextField
              label='Enter your password'
              variant='outlined'
              type='password'
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
              {...field}
            />
          )}
        />
      </Box>
      <Box className={styles.field}>
        <Button
          variant='contained'
          color='primary'
          type='submit'
        >Submit</Button>
      </Box>

    </form>
  )
}

export default MUIFormTemplate
