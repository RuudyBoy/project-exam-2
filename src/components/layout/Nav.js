import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logo from "../../images/holidazehvittekst64.png"







function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
	<Navbar className="navbar" expand="lg">
		<Link className="navbar-brand" to="/"> <img className="logo" src={logo} alt="Logo" />  </Link>
		 <Navbar.Toggle aria-controls="basic-navbar-nav" />
		 <Navbar.Collapse id="basic-navbar-nav">
		<nav>
			<Link to="/"> Home</Link>
            <Link to="/hotels">  Hotels</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/about">  About </Link>
			
			{auth ? (
				<>
					|  <Link to="/dashboard">Dashboard</Link>  <button className="cta-nav" onClick={logout}>LOGOUT</button>
				</>
			) : (
				<Link className="cta-nav"  to="/login"> SIGN IN</Link>
				
			)}
		
		</nav> 
		</Navbar.Collapse>
		</Navbar>
	);
}

export default Nav;
