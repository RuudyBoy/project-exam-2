import { FaFileContract, FaHome, FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function DashboardPage() {
	return (
		<>	
		<div className="standard-background" style={{paddingTop: '60px'}}>
			<h1 className="dashboard-title">Dashboard</h1>
			<p className="dashboard-subtitle">Welcome Boss! Monitor and manage your properties below.</p>
			<div className="dashboard-container">
				<Link className="dashboard-card" to="/message-inbox">
					<div className="dashboard-icon"><FaInbox /></div>
					<h3>Messages</h3>
					<p>Check the inbox for new messages and guest communications.</p>
				</Link>
				<Link className="dashboard-card" to="/enquiry-inbox">
					<div className="dashboard-icon"><FaFileContract /></div>
					<h3>Enquiries</h3>
					<p>Review new booking enquiries and manage reservations.</p>
				</Link>
				<Link className="dashboard-card" to="/add-hotel">
					<div className="dashboard-icon"><FaHome /></div>
					<h3>Add Establishment</h3>
					<p>Click here to add more luxury hotels for your customers.</p>
				</Link>
			</div>
		</div>
		</>
	);
}