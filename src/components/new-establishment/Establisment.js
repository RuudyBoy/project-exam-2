import { FaInbox } from "react-icons/fa";
import NewHotel from "./NewHotel";


export default function CreateEstablishment() {
	return (
		<>
        <div> 
        <p className="dashboard-icon">< FaInbox /></p>
        <h1>Add new establishment</h1>
		<div>
			<NewHotel />
		</div>
        </div>
		</>
	);
}