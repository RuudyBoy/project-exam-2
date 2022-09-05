import { Link } from "react-router-dom";

function HotelItem({id, attributes }) {
 return (
  <Link to={`detail/${id}`}>
   <h2>{attributes}</h2>
  </Link>
 );
}

export default HotelItem;