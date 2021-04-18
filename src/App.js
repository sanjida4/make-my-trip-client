import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AllUsers from './components/AllUsers/AllUsers';
import Booking from './components/Booking/Booking/Booking';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AddPackages from './components/AddPackages/AddPackages';
import ManagePackage from './components/ManagePackage/ManagePackage';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/addPackage">
            <AddPackages></AddPackages>
          </Route>
          <Route path="/allUsers">
            <AllUsers></AllUsers>
          </Route>
          <Route path="/managePackage">
            <ManagePackage></ManagePackage>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
