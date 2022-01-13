import withHooks, { mapHooksToProps } from '../../library/withHooks'
import MultiStepPageTemplate from './MultiStepPage'
const hooks = mapHooksToProps(() => {
  console.log('loading the form')
  return {}
})

const MultiStepPage = withHooks(MultiStepPageTemplate, hooks)

export default MultiStepPage
