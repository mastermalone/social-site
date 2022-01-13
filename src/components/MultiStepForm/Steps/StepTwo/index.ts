import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import withHooks, { mapHooksToProps } from '../../../../library/withHooks';
import { State } from '../../store/MultiStepStore';
import useMultiStepFormReducer from '../../useMultiStepFormReducer';
import StepTwoTemplate from './StepTwoTemplate';

const hooks = mapHooksToProps(() => {
  const history = useHistory();

  const { dispatch, state } = useMultiStepFormReducer();

  const formSubmitHandler: SubmitHandler<State> = (values: State) => {
    dispatch({
      type: 'firstAndLastAndAge',
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
    history.push('/multi-step/step-three');
  };

  const prev = () => {
    history.goBack();
  };

  useEffect(() => {
    console.log('Step Two state', state);
  }, [state]);

  return {
    formSubmitHandler,
    state,
    prev,
  };
});

const StepTwo = withHooks(StepTwoTemplate, hooks);

export default StepTwo;
