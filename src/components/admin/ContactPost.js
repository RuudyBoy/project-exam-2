import Heading from "../layout/Heading";
import BookList from "./ContactList";

export default function ContactPost() {
	return (
		<>
		<Heading content="Contact" />
			<h1>Messages</h1>
			<h2>Inbox</h2>
		<div className="message-container">
			< BookList />
		</div>
		</>
	);
}