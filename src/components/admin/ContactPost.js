import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import BookList from "./ContactList";
import EnquiryList from "./EnquiryInbox";
import NewHotel from "./NewHotel";

export default function ContactPost() {
	return (
		<>
		<Heading content="Contact" />
			<h1>Messages</h1>
			<h2>Inbox</h2>
		<div className="message-container">
			< BookList />
		</div>
		<h1>Enquiries</h1>
		<EnquiryList/>
		< NewHotel/>
		</>
	);
}