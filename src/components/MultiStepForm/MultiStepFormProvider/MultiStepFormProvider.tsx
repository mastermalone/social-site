import React, { createContext, useReducer } from 'react';
import {
  ActionType,
  initialState,
  reducer,
  State,
} from '../store/MultiStepStore';

export interface MultiStepFormProviderInterface {
  dispatch: React.Dispatch<ActionType>;
  state: State;
}

export const MultiStepFormContext =
  createContext<MultiStepFormProviderInterface>({
    dispatch: (value) => {
      throw new Error(
        'Attempted to call dispatch without MultiStepFormProvider'
      );
    },
    state: initialState,
  });

/**
 *
 * @summary
 * Within this provider component, we send the desired shared functionality
 * and state with any child components within its context
 * @returns
 */
const MultiStepFormProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const MultiStepContextProperties = {
    state,
    dispatch,
  };

  return (
    <MultiStepFormContext.Provider value={MultiStepContextProperties}>
      {children}
    </MultiStepFormContext.Provider>
  );
};

export default MultiStepFormProvider;
