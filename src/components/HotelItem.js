import { FaHandPointRight, FaMap, FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaMapPin, FaPlane, FaStar, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
//import  bilde  from "../images/bilde.jpg";

function HotelItem({id, attributes }) {
 return (
   <div className="hotel-show"> 
   <img className="hotel-img" src={attributes} alt="Logo" />
   <div className="hotel-inner">
    <div className="hotel-yiha"> 
      <h2>Ibis hotel</h2>
      <hr></hr>
      <div className="hotel-location">
      <p className="map-icon"><FaMapMarkerAlt/></p>
      <p> Bergen</p>
      </div>
     
      
      <p className="hotel-p">Nullam vulputate erat a ex tincidunt viverra. Sed dapibus feugiat elementum.</p>
      <div className="review"> 
      <p className="hotel-review"> 7/10 </p> 
      <p className="review-text">Bra </p>
     </div>
    </div>
   <div className="hotel-persons">
    <p className="hotel-price">2200 kr</p>
    <p className="price-info"> 1100kr per night</p>
    <Link to={`detail/${id}`}><p className="cta-hotel"> MORE INFO</p></Link>
   </div>
   </div>
   </div>
 );
}

export default HotelItem;