import { FaInbox } from "react-icons/fa";
import EnquiryList from "./EnquiryList";



export default function EnquiryInbox() {
	return (
		<>
        <div className="inbox-container"> 
        <p className="dashboard-icon">< FaInbox /></p>
        <h1>Enquiry inbox</h1>
        <p className="new-messages">See all enquiries</p>
		<div className="message-container">
			<EnquiryList />
		</div>
        </div>
		</>
	);
}