
import { FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";
import MessageList from "./MessageList";


export default function MessageInbox() {
	return (
		<>
        <div className="inbox-container"> 
        <p className="inbox-icon">< FaInbox /></p>
        <h1>Message inbox</h1>
		<div className="message-container">
			<MessageList />
		</div>
		<Link to="/dashboard" className="back-link"> Back to dashboard page </Link>
        </div>
		</>
	);
}