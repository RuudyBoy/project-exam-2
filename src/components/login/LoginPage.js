import { FaHotel } from "react-icons/fa";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import logo from "../../images/holidazeform128.png"

export default function LoginPage() {
	return (
		<>
		<div className="signin-background">
		
		<img className="form-logo" src={logo} alt="Logo" />
		
		<div>
			<Heading content="Sign in" />
			<LoginForm />
		</div>
			</div>
		</>
	);
}