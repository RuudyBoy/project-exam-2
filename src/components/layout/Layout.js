import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HotelDetail from '../HotelDetail';
import HotelPost from '../HotelPost';
import LoginPage from '../login/LoginPage';
import Nav from './Nav';
import DashboardPage from '../dashboard/DashboardPage';
import "../../App.scss"
import Home from '../home/Home';
import { AuthProvider } from '../../context/AuthContext';


function Layout() {
  return (
    <AuthProvider>
    <Router>
      <Nav />
      <Container>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/hotels" exact>
            <HotelPost />
          </Route>
          <Route path="/detail/:id">
            <HotelDetail />
          </Route>
          <Route path="/login">
							<LoginPage />
						</Route>
            <Route path="/dashboard" exact>
						<DashboardPage />
					</Route>
        </Switch>
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default Layout;