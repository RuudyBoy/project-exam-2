import { FaFileContract, FaHome, FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function DashboardPage() {
	return (
		<>	
		<div className="signin-background">
		<h1 className="dashboard-title">Dashboard</h1>
		<h2 className="dashboard-title">Welcome Boss!</h2>
		<div className="dashboard-container">
			<Link className="dashboard-card" to="/message-inbox">
			<div >
			<p className="dashboard-icon">< FaInbox /></p>
				<h3>Messages</h3>
				<p>Check the inbox for new messages.</p>
			</div>
			</Link>
			<Link className="dashboard-card" to="/enquiry-inbox">
				<div>
					<p className="dashboard-icon">< FaFileContract /></p>
					<h3>Enquiries</h3>
					<p>Check the inbox for new enquiries.</p>
					</div>
			</Link>
			<Link className="dashboard-card" to="/add-hotel">
			<div>
				<p className="dashboard-icon">< FaHome /></p>
				<h3>Add more establishments</h3>
				<p>Click here to add more establishments for your costumers.</p>
			</div>
			</Link>
		</div>
			</div>
		</>
	);
}