import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import withHooks, { mapHooksToProps } from '../../../../library/withHooks';
import { State } from '../../store/MultiStepStore';
import useMultiStepFormReducer from '../../useMultiStepFormReducer';
import StepOneTemplate from './StepOneTemplate';

const hooks = mapHooksToProps(() => {
  const history = useHistory();
  const { dispatch, state } = useMultiStepFormReducer();

  const formSubmitHandler: SubmitHandler<State> = (values: State) => {
    /**
     * Here we use the dispatch function from the MultiStepForm context
     * and dispatch the event type to the reducer to update the shared
     * state
     */
    dispatch({
      type: 'usernamePassword',
      payload: {
        username: values.username,
        password: values.password,
        address: values.address,
        age: values.age,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
      },
    });
    history.push('/multi-step/step-two');
  };
  useEffect(() => {
    console.log('Step One state', state);
  }, [state]);

  return {
    formSubmitHandler,
    state,
  };
});

const StepOne = withHooks(StepOneTemplate, hooks);

export default StepOne;
