import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import withHooks, { mapHooksToProps } from '../../../../library/withHooks';
import { State } from '../../store/MultiStepStore';
import useMultiStepFormReducer from '../../useMultiStepFormReducer';
import StepThreeTemplate from './StepThreeTemplate';

const hooks = mapHooksToProps(() => {
  const history = useHistory();
  const { dispatch, state } = useMultiStepFormReducer();

  const formSubmitHandler: SubmitHandler<State> = (values: State) => {
    dispatch({
      type: 'addressPhoneAndEmail',
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
  };
  useEffect(() => {
    console.log('Step Three state', state);
  }, [state]);

  const prev = () => {
    history.goBack();
  };
  return {
    formSubmitHandler,
    state,
    prev,
  };
});

const StepThree = withHooks(StepThreeTemplate, hooks);

export default StepThree;
