
import SigninForm from "./SigninForm";
import logo from "../../images/holidazeform128.png"

export default function SigninPage() {
	return (
		<>
		<div className="standard-background">
		<img className="form-logo" src={logo} alt="Logo" />
		<div>
			<SigninForm />
		</div>
		</div>
		</>
	);
}