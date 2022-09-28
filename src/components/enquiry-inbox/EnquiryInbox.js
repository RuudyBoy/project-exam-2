import { FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";
import EnquiryList from "./EnquiryList";



export default function EnquiryInbox() {
	return (
		<>
		<div className="standard-background"> 
        <div className="inbox-container"> 
        <p className="inbox-icon">< FaInbox /></p>
        <h1>Enquiry inbox</h1>
        <p>See all enquiries</p>
		<div className="message-container">
			<EnquiryList />
		</div>
		<Link to="/dashboard" className="back-link">Back to hotels page</Link>
        </div>
		</div>
		</>
	);
}