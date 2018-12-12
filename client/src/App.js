import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Departments from './components/Departments';
import Department from './components/Department';
import DepartmentForm from './components/DepartmentForm';
import ItemForm from './components/ItemForm';
import NoMatch from './components/NoMatch';
import styled from 'styled-components';

const App = () => (
  <AppContainer>
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/departments" component={Departments} />
      <Route exact path="/departments/new" component={DepartmentForm} />
      <Route exact path="/departments/:id/items" component={Department} />
      {/* <Route exact path="/departments/:id/edit" component={DepartmentForm} /> */}
      <Route exact path="/departments/:id/items/new" component={ItemForm} />
      {/* <Route exact path="/departments/:id/items/:id" component={Item} /> */}
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
  </AppContainer>
);//end of const App

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, white, purple);
  height: 500vh;
`;

export default App;