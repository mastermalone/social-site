import withHooks, { mapHooksToProps } from '../../library/withHooks'

import LoginPageTemplate from './LoginPageTemplate'

interface ILoginPagePros {
  isLoggedIn: boolean
}

const hooks = mapHooksToProps(({ isLoggedIn }: ILoginPagePros) => {
  console.log('The container is loading')

  const loggedIn = isLoggedIn || true
  return {
    isLoggedIn: loggedIn,
  }
})

const LoginPage = withHooks(LoginPageTemplate, hooks)

export default LoginPage
