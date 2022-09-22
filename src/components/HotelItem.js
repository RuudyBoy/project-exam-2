import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";
//import  bilde  from "../images/bilde.jpg";

function HotelItem({id, attributes }) {
 return (
   <div className="hotel-show"> 
   <img className="hotel-img" src={attributes} alt="Logo" />
  
   <div className="hotel-inner">
    <div className="hotel-info"> 
      <h2>Hotel</h2>
      <p>Bergen city</p>
      <p className="text">Nullam vulputate erat a ex tincidunt viverra. Sed dapibus feugiat elementum.</p>
      <p className="hotel-review"> 7/10 Great</p> 
      <Link to={`detail/${id}`}><p className="cta-hotel"> MORE INFO</p></Link>
    </div>
   <div>
    <p className="hotel-price">2200 kr</p>
    <p> For 2 persons</p>
   </div>
   </div>
  
   </div>
 );
}

export default HotelItem;