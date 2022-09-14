import { Link } from "react-router-dom";
import  bilde  from "../images/bilde.jpg";

function HotelItem({id, attributes }) {
 return (
   <div className="hotel-show">
   <img className="hotel-img" src={bilde} alt="Logo" />
   <h2>{attributes}</h2>
   <p>In maximus erat ac sollicitudin volutpat. Phasellus libero neque, bibendum sit amet metus vel, gravida dictum elit. Nullam magna libero, efficitur pretium nulla at, feugiat cursus mi. Ut non nulla ipsum. Nam eu sapien auctor arcu iaculis blandit. Ut enim risus, maximus ut elit ut, egestas consequat tortor. Sed eu dolor vel dui imperdiet porta tempor nec nisi.</p>
    <Link to={`detail/${id}`}><a className="cta-login"> More info</a></Link>
   </div>
 );
}

export default HotelItem;