import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddHotels from "./AddHotelForm";


export default function AddHotel() {
	return (
		<>
        <div className="signin-background"> 
        <p className="inbox-icon"><FaHome/></p>
        <h1 className="addhotel-title">Add new establishment</h1>
		<div className="addhotel-cotainer">
			<div>
				<AddHotels/>
			</div>
			<Link to="/dashboard" className="back-link" >Back to dashboard page</Link>
		</div>
		
        </div>
		</>
	);
}