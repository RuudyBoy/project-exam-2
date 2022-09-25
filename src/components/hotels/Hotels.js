import HotelPost from "../HotelPost";
//import Search from "./SearchHotel";

export default function Hotels() {
  return (
		<>
		<div className='hotel-background' >
		<div className="holidaze">
			 <h1>Holidaze</h1>
		</div>	
	 	  <div className="hotel-post"><HotelPost /></div>
		  
		  <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav></div>
	  </>
	);
}
  
