import { Link } from "react-router-dom";
import  bilde  from "../images/bilde.jpg";

function HotelItem({id, attributes }) {
 return (
   <div className="hotel-show"> 
   <img className="hotel-img" src={attributes} alt="Logo" />
   <h2>Hotel</h2>
   <p>{attributes.text}</p>
   <Link to={`detail/${id}`}><p className="cta-hotel"> More info</p></Link>
   </div>
 );
}

export default HotelItem;