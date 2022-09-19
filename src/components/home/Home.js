import Heading from '../layout/Heading';
import { FaHotel } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <div className='home-page'>
      <Heading title="Welcome to Holidaze!" />
      <h2>Find a hotel in the beatiful city of Bergen.</h2>
      <Link className='home-cta'><FaHotel /> BOOK HOTEL</Link>
    </div>
    </>
  );
}

