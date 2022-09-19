import "./App.scss";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Nav from './components/layout/Nav';
import DashboardPage from './components/dashboard/DashboardPage';
import "./App.scss"
import { AuthProvider } from './context/AuthContext';
import HotelPost from "./components/HotelPost";
import HotelDetail from "./components/HotelDetail";
import LoginPage from "./components/login/LoginPage";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import ContactPost from "./components/admin/ContactPost";
import Footer from "./components/layout/footer";
import Enquiry from "./components/enquiry/enquiry";



function App() {
  return (
   <AuthProvider>
    <Router>
      <Nav />
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
          <Route path="/contact">
							<Contact />
						</Route>
            <Route path="/about">
							<About />
						</Route>
          <Route path="/login">
							<LoginPage />
						</Route>
            <Route path="/admin">
						< ContactPost/>
					</Route>
            <Route path="/dashboard" exact>
						<DashboardPage />
					</Route>
          <Route path="/enquiry">
							< Enquiry/>
						</Route>
        </Switch>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;

