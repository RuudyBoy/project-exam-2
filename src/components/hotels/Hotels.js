import GetHotel from "./GetHotel";
import logo from "../../images/holidazeform128.png";

export default function Hotels() {
  return (
		<>
		<div className="hotel-page-wrapper">
			<div className="hotel-hero">
				<div className="hotel-hero-content">
					<img src={logo} alt="Holidaze Logo" style={{ maxWidth: '200px', marginBottom: '20px' }} />
					<h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: '700' }}>Explore Luxury Stays</h1>
					<p style={{ color: '#ccc', fontSize: '1.2rem' }}>Find the best rooms at the best prices in Bergen</p>
				</div>
			</div>	
	 	  <GetHotel/>
		</div>
	  </>
	);
}
  
