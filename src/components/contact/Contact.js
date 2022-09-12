import Heading from '../layout/Heading';
import ContactForm from './ContactForm';
import Post from './ContactPost';


export default function Contact() {
  return (
    <>
    <div className='home-page'>
      <Heading title="Contact us" />
      
      <h2> Ask any questions here:)</h2>
      <ContactForm />
      <Post />
    </div>
    </>
  );
}
