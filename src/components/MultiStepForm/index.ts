import withHooks, { mapHooksToProps } from '../../library/withHooks'
import MultiStepFormTemplate from './MultiStepFormTemplate'

const hooks = mapHooksToProps(() => {
  return {}
})

const MultiStepForm = withHooks(MultiStepFormTemplate, hooks)

export default MultiStepForm
