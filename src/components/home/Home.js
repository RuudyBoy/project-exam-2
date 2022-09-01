import Heading from '../layout/Heading';
import image from '../../images/bilde.jpg';

export default function Home() {
  return (
    <>
    <div className='home-page'>
      <Heading title="Welcome to Holidaze" />
      <p>Visit the beatuful city of bergen</p>
      <a className='home-cta' href='/hotels'>See all hotels</a>
    </div>
    </>
  );
}