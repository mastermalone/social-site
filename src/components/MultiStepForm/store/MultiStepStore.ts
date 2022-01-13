export type State = {
  username: string
  password: string
  firstName: string
  lastName: string
  age: number
  address: string
  phoneNumber: string
  email: string
}

export type ActionType = {
  type: 'usernamePassword' | 'firstAndLastAndAge' | 'addressPhoneAndEmail'
  payload: State
}

export const initialState: State = {
  address: '',
  age: 0,
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  phoneNumber: '',
  username: '',
}

export const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case 'usernamePassword':
      return {
        ...state,
        userName: action.payload.username,
        password: action.payload.password,
      }
    case 'firstAndLastAndAge':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        age: action.payload.age,
      }
    case 'addressPhoneAndEmail':
      return {
        ...state,
        address: action.payload.address,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
      }
    default:
      throw new Error('You did not supply an action to dispatch')
  }
}
