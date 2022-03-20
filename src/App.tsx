import React from 'react';
import { initializeIcons } from '@fluentui/react';
import './App.css';
import Ft3asTop from './controls/Ft3asTop';

initializeIcons();


export const App: React.FunctionComponent = () => {
  return (
    <Ft3asTop />
  );
};
