/**
 * TUTORIAL found here:
 * https://youtu.be/nt8NTuUbuG4
 */
import React, { useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useFormStyles from './styles';

interface IFormInputs {
  email: string
  password: string;
}

const FormTemplate = (): JSX.Element => {
  const styles = useFormStyles()

  const schema = yup.object().shape({
    email: yup.string().email().required('The email is required'),
    password: yup.string().min(4).max(20).required('')
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('The submitted data', data)
  }

  /**
   * You can watch a specific field if you ike using the 'watch' function
   * @example
   * watch('email')
   */


  useMemo(() => {
    watch('email');

  }, [watch])

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <input className={styles.field} defaultValue="mastermalone@gmail.com" {...register('email')} />
      {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      <input type="password" className={styles.field} defaultValue="" {...register('password')} />
      {errors.password && <span className={styles.error}>{errors.password.message}</span>}
      <input className={styles.submit} type="submit" />
    </form>
  )
};

export default FormTemplate;