import { FaHandPointRight, FaMap, FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMapPin, FaPlane, FaStar, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
//import  bilde  from "../images/bilde.jpg";

function HotelItem({id, image, price , text, rating, title }) {
 return (
   <div className="hotel-show"> 
   <img className="hotel-img" src={image} alt="Logo" />
   <div className="hotel-inner">
    <div className="hotel-yiha"> 
      <h2>{title}</h2>
      <hr></hr>
      <div className="hotel-location">
      <p className="map-icon"><FaMapMarkerAlt/></p>
      <p> Bergen</p>
      </div>
     
      
      <p className="hotel-p">{text}.</p>
      <div className="review">
      <p className="review-text"> Review: </p> 
      <p className="hotel-review"> {rating}/10 </p> 
      
     </div>
    </div>
   <div className="hotel-persons">
    <p className="hotel-price">{price} kr</p>
    <p className="price-info"> per night</p>
    <Link to={`detail/${id}`}><p className="cta-hotel"> MORE INFO</p></Link>
   </div>
   </div>
   </div>
 );
}

export default HotelItem;