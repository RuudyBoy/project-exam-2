import Heading from '../layout/Heading';
import ContactForm from './ContactForm';


export default function Contact() {
  return (
    <>
    <div className='home-page'>
      <Heading title="Contact us" />
      
      <h2> Ask any questions here:)</h2>
      <ContactForm />
    </div>
    </>
  );
}
