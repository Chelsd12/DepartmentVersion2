import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Departments from './components/Departments';
import Department from './components/Department';
import DepartmentForm from './components/DepartmentForm';
import Item from './components/Item';
import NoMatch from './components/NoMatch';

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/departments" component={Departments} />
      <Route exact path="/departments/new" component={DepartmentForm} />
      <Route exact path="/departments/:id/items" component={Department} />
      <Route exact path="/departments/:id/edit" component={DepartmentForm} />
      <Route exact path="/departments/:id/items/:id" component={Item} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);//end of const App

export default App;