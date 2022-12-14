import {  FaMapMarkerAlt} from "react-icons/fa";
import { Link } from "react-router-dom";


function HotelItem({id, image, price , text, rating, title }) {
 return (
   <div className="hotel-card"> 
   <img className="hotel-img" src={image} alt="Logo" />
   <h2>{title}</h2>
   <hr></hr>
   <div className="hotel-inner">
    <div className="hotel-information"> 
      <div className="hotel-location">
        <p className="map-icon"><FaMapMarkerAlt/></p>
        <p>Bergen</p>
      </div>
      <p className="hotel-text">{text}.</p>
      <div className="review">
        <p className="review-text"> Review: </p> 
        <p className="hotel-review"> {rating}/10 </p> 
     </div>
    </div>
    <div className="hotel-price-info">
      <p className="hotel-price">{price} kr</p>
      <p className="hotel-text"> per night</p>
    <Link to={`detail/${id}`}><p className="cta-button"> MORE INFO</p></Link>
   </div>
   </div>
   </div>
 );
}

export default HotelItem;