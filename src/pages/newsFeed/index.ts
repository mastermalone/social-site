import withHooks, { mapHooksToProps } from '../../library/withHooks'
import NewsFeedTemplate from './NewsFeed'

const hooks = mapHooksToProps(() => {
  console.log('The landing page hooks')
  return {}
})

const NewsFeed = withHooks(NewsFeedTemplate, hooks)

export default NewsFeed
