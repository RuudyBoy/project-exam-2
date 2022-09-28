
import LoginForm from "./LoginForm";
import logo from "../../images/holidazeform128.png"

export default function LoginPage() {
	return (
		<>
		<div className="signin-background">
		<img className="form-logo" src={logo} alt="Logo" />
		<div>
			<LoginForm />
		</div>
			</div>
		</>
	);
}