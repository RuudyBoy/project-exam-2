import { FaHandPointRight, FaInfo, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import  bilde  from "../images/bilde.jpg";

function HotelItem({id, attributes }) {
 return (
   <div className="hotel-show"> 
   <img className="hotel-img" src={attributes} alt="Logo" />
   <h2>Hotel</h2>
   <p className="hotel-p">Nullam vulputate erat a ex tincidunt viverra. Sed dapibus feugiat elementum. Sed elementum sapien quis augue pretium cursus. Ut sollicitudin diam vel rhoncus tempus. Curabitur in elit quis dui condimentum sollicitudin. Nam vel nulla vel mauris tincidunt cursus.</p>
   <Link to={`detail/${id}`}><p className="cta-hotel"> <FaHandPointRight /> MORE INFO</p></Link>
   </div>
 );
}

export default HotelItem;