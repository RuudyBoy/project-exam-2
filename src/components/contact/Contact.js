import { FaHotel } from 'react-icons/fa';
import Heading from '../layout/Heading';
import ContactForm from './ContactForm';


export default function Contact() {
  return (
    <>
    <div className="signin-background" >
    <div>
      <p className="form-logo"> < FaHotel /> </p>
			<h1 className="logo-login">Holidaze</h1>
		</div>
    <div className='contact-page'>
      <ContactForm />
    </div>
    </div>
    </>
  );
}
