import withHooks, { mapHooksToProps } from '../../library/withHooks'
import LandingPageTemplate from './LandingPage'

const hooks = mapHooksToProps(() => {
  console.log('The landing page hooks')
  return {}
})

const LandingPage = withHooks(LandingPageTemplate, hooks)

export default LandingPage
