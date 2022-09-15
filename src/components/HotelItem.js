import { Link } from "react-router-dom";
import  bilde  from "../images/bilde.jpg";

function HotelItem({id, attributes }) {
 return (
   <div className="hotel-show"> <Link to={`detail/${id}`}>
   <img className="hotel-img" src={bilde} alt="Logo" />
   <h2>{attributes}</h2>
   <p>In maximus erat ac sollicitudin volutpat. Phasellus libero neque, bibendum sit amet metus vel, gravida dictum elit. Nullam magna libero, efficitur pretium nulla at, feugiat cursus mi. Ut non nulla ipsum.</p>
   <a className="cta-hotel"> More info</a></Link>
   </div>
 );
}

export default HotelItem;