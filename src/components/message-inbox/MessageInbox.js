
import { FaInbox } from "react-icons/fa";
import MessageList from "./MessageList";


export default function MessageInbox() {
	return (
		<>
        <div className="inbox-container"> 
        <p className="dashboard-icon">< FaInbox /></p>
        <h1>Message inbox</h1>
		<div className="message-container">
			<MessageList />
		</div>
        </div>
		</>
	);
}