import withHooks, { mapHooksToProps } from '../../library/withHooks'
import FormTemplate from './Form'

const hooks = mapHooksToProps(() => {
  return {}
})

const Form = withHooks(FormTemplate, hooks)

export default Form
