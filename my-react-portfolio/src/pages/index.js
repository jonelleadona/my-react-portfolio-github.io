import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AboutMe user={user} />
        </Route>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;