import Heading from '../layout/Heading';
import { FaHotel, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../images/holilogo128.png"
import SearchHotel from './SearchHotel';



export default function Home() {
  return (
    <>
   
    <div className="home-background"> 
    <div className="dropdown-inner">
      <SearchHotel/>
    </div>
    <div className="home-container">
    <img className="logo" src={logo} alt="Logo" />
      <Heading title="Welcome to Holidaze!" />
      <h2>Find a hotel in the beatiful city of Bergen.</h2>
      <Link className="home-cta" to="/hotels"><FaHotel /> BOOK HOTEL</Link>
    </div> 
   
    </div>
    </>
  );
}

