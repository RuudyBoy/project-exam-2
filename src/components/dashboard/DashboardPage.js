import { FaFileContract, FaHome, FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function DashboardPage() {
	return (
		<>	
		<div className="signin-background">
		<h1>Dashboard</h1>
		<h2>Welcome Boss!</h2>
		<div className="dashboard">
			<Link className="dashboard-card" to="/message-inbox">
			<div >
			<p className="dashboard-icon">< FaInbox /></p>
				<h2>Messages</h2>
				<p>Check the inbox for new messages.</p>
			</div>
			</Link>
			<Link className="dashboard-card" to="/enquiry-inbox">
				<div>
					<p className="dashboard-icon">< FaFileContract /></p>
					<h2>Enquiries</h2>
					<p>Check the inbox for new enquiries.</p>
					</div>
			</Link>
			<Link className="dashboard-card" to="/new-establishment">
			<div>
				<p className="dashboard-icon">< FaHome /></p>
				<h2>Add more establishments</h2>
				<p>Click here to add more establishments for your costumers.</p>
			</div>
			</Link>
		</div>
			</div>
		</>
	);
}