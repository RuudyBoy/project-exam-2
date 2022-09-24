import { FaHotel } from 'react-icons/fa';
import Heading from '../layout/Heading';
import ContactForm from './ContactForm';
import logo from "../../images/holi128.png"


export default function Contact() {
  return (
    <>
    <div className="signin-background" >
    <div>
    <img className="logo" src={logo} alt="Logo" />
			<h1 className="logo-login">Holidaze</h1>
		</div>
    <div className='contact-page'>
      <ContactForm />
    </div>
    </div>
    </>
  );
}
