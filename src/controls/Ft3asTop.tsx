import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Ft3asNavigation } from './Ft3asNav';
import Ft3asApp from './Ft3asApp';
import Ft3asHome from './Ft3asHome';

export default class Ft3asTop extends React.Component {
  render() {    
    return (
      <div className="Ft3asTop">
        <BrowserRouter>
          <div>
            <Ft3asNavigation />
            <Switch>
              <Route path="/" component={Ft3asHome}/>
              <Route path="/review/" component={Ft3asApp} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}