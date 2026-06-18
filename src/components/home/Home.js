import Heading from '../layout/Heading';
import { FaHotel } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchHotel from './SearchHotel';

export default function Home() {
  return (
    <>
      <div className="home-background"> 
        <div className="home-container">
          <Heading title="Welcome to Holidaze" />
          <h2>Discover luxury hotels and resorts in the beautiful city of Bergen.</h2>
          <div className="dropdown-inner">
            <SearchHotel/>
          </div>
          <Link className="home-cta" to="/hotels">
            <FaHotel /> EXPLORE HOTELS
          </Link>
        </div> 
      </div>
    </>
  );
}
