export type State = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  phoneNumber: string;
  email: string;
};

export type ActionType = {
  type: 'usernamePassword' | 'firstAndLastAndAge' | 'addressPhoneAndEmail';
  payload: State;
};

export const initialState: State = {
  address: '',
  age: 0,
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  phoneNumber: '',
  username: '',
};

/**
 * @since 1.0.0
 * @summary This function returns a new state object which is a copy of
 * the original initialSate object along with updated values from the
 * outside dispatch call from useReducer.  The dispatch call uses an action
 * which is an object containing the 'type' and 'payload' keys. To update
 * a particular value, the action type is check via the switch case and based
 * on the case, the designated values will override the spread values of the
 * current state.
 *
 * This function is passed to the 'useReducer()' method from react
 * @param state Object
 * @param action Object
 * @returns Object
 */
export const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case 'usernamePassword':
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    case 'firstAndLastAndAge':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        age: action.payload.age,
      };
    case 'addressPhoneAndEmail':
      return {
        ...state,
        address: action.payload.address,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
      };
    default:
      throw new Error('You did not supply an action to dispatch');
  }
};
