
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Nav from './components/layout/Nav';
import DashboardPage from './components/dashboard/DashboardPage';
import "./sass/style.scss"
import { AuthProvider } from './context/AuthContext';
import HotelDetail from "./components/HotelDetail";
import LoginPage from "./components/login/LoginPage";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/layout/footer";
import MessageInbox from "./components/message-inbox/MessageInbox";
import EnquiryInbox from "./components/enquiry-inbox/EnquiryInbox";
import CreateEstablishment from "./components/new-establishment/Establisment";
import Enquiry from "./components/enquiry/enquiry";
import Hotels from "./components/hotels/Hotels";





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
            <Hotels />
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
            <Route path="/new-establishment">
						< CreateEstablishment/>
					</Route>
            <Route path="/dashboard" exact>
						<DashboardPage />
					</Route>
          <Route path="/message-inbox">
						< MessageInbox/>
					</Route>
          <Route path="/enquiry-inbox">
						< EnquiryInbox/>
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

