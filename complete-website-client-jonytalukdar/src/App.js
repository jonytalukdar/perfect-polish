import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import { Container } from 'react-bootstrap';
import ManageBook from './components/manageBook/ManageBook';
import Header from './components/Home/Header/Header';
import SetReview from './components/SetReview/SetReview';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <Container>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/book/:_id">
              <Checkout />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/manage">
              <ManageBook></ManageBook>
            </Route>
            <Route path="/SetReview">
              <SetReview></SetReview>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
