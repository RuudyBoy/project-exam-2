import ContactForm from './ContactForm';
import logo from "../../images/holidazeform128.png"


export default function Contact() {
  return (
    <>
    <div className="signin-background" >
    <div>
    <img className="logo" src={logo} alt="Logo" />
		</div>
    <div>
      <ContactForm />
    </div>
    </div>
    </>
  );
}
