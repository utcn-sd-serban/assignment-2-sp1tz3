import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";
import SmartQuestionsList from './view/SmartQuestionsList';
import SmartCreateQuestion from './view/SmartCreateQuestion';
import SmartQuestionDetails from './view/SmartQuestionDetails';
import SmartCreateAnswer from './view/SmartCreateAnswer';

const App = () => (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact={true} component={SmartQuestionsList} path="/" />
            <Route exact={true} component={SmartCreateQuestion} path="/create-question" />
            <Route exact={true} component={SmartQuestionDetails} path="/question-details/:index" />
            <Route exact={true} component={SmartCreateAnswer} path="/create-answer"/>
          </Switch>
        </HashRouter>
      </div>
);

export default App;