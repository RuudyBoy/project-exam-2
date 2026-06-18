import { FaMapMarkerAlt, FaWifi, FaParking, FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

function HotelItem({id, image, price , text, rating, title }) {
 return (
   <div className="hotel-card"> 
    <div className="img-container">
      <img className="hotel-img" src={image} alt={title} />
    </div>
    <div className="hotel-inner">
      <h2>{title}</h2>
      <div className="review">
        <span className="hotel-review">★</span> 
        <p className="review-text">{rating}/10</p> 
      </div>
      <div className="hotel-location">
        <p className="map-icon"><FaMapMarkerAlt/></p>
        <p>Bergen, Norway</p>
      </div>
      
      <p className="hotel-text">{text}</p>
      
      <div className="hotel-amenities">
         <div className="amenity"><FaWifi/> Free Wifi</div>
         <div className="amenity"><FaParking/> Parking</div>
         <div className="amenity"><FaCoffee/> Breakfast</div>
      </div>
      
      <div className="hotel-price-info">
        <div>
          <span className="hotel-price">{price} kr</span>
          <span className="price-info"> / night</span>
        </div>
        <Link to={`detail/${id}`} className="cta-button">MORE INFO</Link>
      </div>
    </div>
   </div>
 );
}

export default HotelItem;