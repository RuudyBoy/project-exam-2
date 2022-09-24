import { FaHome, FaInbox } from "react-icons/fa";
import NewHotel from "./NewHotel";


export default function CreateEstablishment() {
	return (
		<>
        <div className="signin-background"> 
        <p className="dashboard-icon"><FaHome/></p>
        <h1>Add new establishment</h1>
		<div>
			<NewHotel />
		</div>
        </div>
		</>
	);
}