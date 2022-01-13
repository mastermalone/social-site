import { useContext } from 'react'
import {
  MultiStepFormContext,
  MultiStepFormProviderInterface,
} from './MultiStepFormProvider/MultiStepFormProvider'

const useMultiStepFormReducer = (): MultiStepFormProviderInterface =>
  useContext(MultiStepFormContext)
export default useMultiStepFormReducer
