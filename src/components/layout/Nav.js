import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
//import { Navbar } from "react-bootstrap";
//import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
//import NavbarToggle from "react-bootstrap/esm/NavbarToggle";




function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}
	return (
	<Navbar  bg="dark" variant="dark" expand="lg">
		 <Navbar.Toggle aria-controls="basic-navbar-nav" />
		 <Navbar.Collapse id="basic-navbar-nav">
		<nav className="mr-auto">
			<Link to="/">Home</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About </Link>
			{auth ? (
				<>
					|<Link to="/enquiry">Enquiry</Link> <Link to="/admin">Messages</Link>  <Link to="/dashboard">Dashboard</Link>  <button className="cta-login" onClick={logout}>LOGOUT</button>
				</>
			) : (
				<Link className="cta-login"  to="/login"> LON</Link>
			)}
		</nav>
		</Navbar.Collapse>
		</Navbar>

	);
}

export default Nav;


