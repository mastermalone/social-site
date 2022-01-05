import withHooks, { mapHooksToProps } from '../../library/withHooks'
import MUIFormTemplate from './MUIFormTemplate'

const hooks = mapHooksToProps(() => {
  return {}
})

const MUIForm = withHooks(MUIFormTemplate, hooks)

export default MUIForm
