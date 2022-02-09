import withHooks, { mapHooksToProps } from '../../library/withHooks';
import TestingTemplate from './Testing';
import urlPatternMatchingService from './urlPatternMatchingService';

const hooks = mapHooksToProps(() => {
  const matchService = urlPatternMatchingService();

  console.log('matches', matchService.match('https://vimeo.com/524933864'));

  return {};
});

const Testing = withHooks(TestingTemplate, hooks);

export default Testing;
