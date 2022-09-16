import Heading from '../layout/Heading';
import { FaHotel } from 'react-icons/fa';

export default function Home() {
  return (
    <>
    <div className='home-page'>
      <Heading title="Welcome to Holidaze!" />
      <h2>Find a hotel in the beatiful city of Bergen.</h2>
      <a className='home-cta' href='/hotels'><FaHotel /> BOOK HOTEL</a>
    </div>
    </>
  );
}

