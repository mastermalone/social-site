import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import LoginPage from '../pages/LoginPage';
import NewsFeed from '../pages/newsFeed';
import MultiStepPage from '../pages/MultiStepPage/';
import Testing from '../pages/testing/';
import { Route, Switch } from 'react-router-dom';
import StepTwo from '../components/MultiStepForm/Steps/StepTwo';
import StepOne from '../components/MultiStepForm/Steps/StepOne';
import StepThree from '../components/MultiStepForm/Steps/StepThree';
import ControlledAccordion from '../components/Accordion/ControlledAccordion';
import MediaGalleryCarouselPage from '../pages/MediaGalleryCarouselPage/';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/social" component={LandingPage} />
      <Route exact path="/news" component={NewsFeed} />
      <Route exact path="/multi-step" component={MultiStepPage} />
      <Route exact path="/multi-step/step-one" component={StepOne} />
      <Route exact path="/multi-step/step-two" component={StepTwo} />
      <Route exact path="/multi-step/step-three" component={StepThree} />
      <Route exact path="/accordion" component={ControlledAccordion} />
      <Route exact path="/testing" component={Testing} />
      <Route exact path="/gallery" component={MediaGalleryCarouselPage} />
    </Switch>
  );
};

export default Routes;
