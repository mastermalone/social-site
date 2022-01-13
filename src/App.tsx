import React from 'react';
import './App.css';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import MultiStepFormProvider from './components/MultiStepForm/MultiStepFormProvider/MultiStepFormProvider';

function App() {
  return (
    <BrowserRouter>
      <MultiStepFormProvider>
        <Router />
      </MultiStepFormProvider>
    </BrowserRouter>
  );
}

export default App;
