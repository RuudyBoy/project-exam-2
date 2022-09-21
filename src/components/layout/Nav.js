import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logo from "../../images/bilde.jpg" 
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
	<Navbar className="navbar" expand="lg">
		<Link className="navbar-brand" to="/"> Holzinger</Link>
		 <Navbar.Toggle aria-controls="basic-navbar-nav" />
		 <Navbar.Collapse id="basic-navbar-nav">
		<nav>
			<Link to="/">Home</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About </Link>
			{auth ? (
				<>
					|  <Link to="/dashboard">Dashboard</Link>  <button className="cta-login" onClick={logout}>LOGOUT</button>
				</>
			) : (
				<Link className="cta-login"  to="/login"> LOGIN</Link>
			)}
		</nav>
		</Navbar.Collapse>
		</Navbar>
	);
}

export default Nav;


	/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
	
*/