import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

export default function LoginPage() {
	return (
		<>
		<div className="login-container">
		<div>
			<h1>Holzinger</h1>
			<p>dette er fett</p>
		</div>
		<div>
			<Heading content="Login" />
			<LoginForm />
		</div>
			</div>
		</>
	);
}