import React, { createContext, useReducer } from 'react';
import { ActionType, initialState, reducer, State } from '../store/MultiStepStore';

export interface MultiStepFormProviderInterface {
  // reducer: (state: State, action: ActionType) => State,
  dispatch: React.Dispatch<ActionType>,
  state: State
}
// const state = initialState
export const MultiStepFormContext = createContext<MultiStepFormProviderInterface>({
  // reducer: (state, action) => {
  //   throw new Error(
  //     'Attempted to call reducer without MultiStepFormProvider'
  //   )
  // },
  dispatch: (value) => {
    throw new Error(
      'Attempted to call dispatch without MultiStepFormProvider'
    )
  },
  state: initialState
});


const MultiStepFormProvider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const MultiStepContextProperties = {
    state,
    dispatch,
  }

  return (
    <MultiStepFormContext.Provider value={MultiStepContextProperties}>
      {children}
    </MultiStepFormContext.Provider>
  )
};

export default MultiStepFormProvider;

