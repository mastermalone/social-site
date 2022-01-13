import { useContext } from 'react';
import {
  MultiStepFormContext,
  MultiStepFormProviderInterface,
} from './MultiStepFormProvider/MultiStepFormProvider';

/**
 * @since 1.0.0
 * @summary This hook returns the state and dispatch function
 * created within the context of the MultiStepFormProvider.
 * Now the state created by the reducer can be shared by all
 * child components wrapped by the provider
 * @example
 * const {state, dispatch} = useMultiStepFormReducer();
 * @returns state Object dispatch Function
 */
const useMultiStepFormReducer = (): MultiStepFormProviderInterface =>
  useContext(MultiStepFormContext);
export default useMultiStepFormReducer;
