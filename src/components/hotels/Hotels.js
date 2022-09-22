import HotelPost from "../HotelPost";
import SearchHotel from "./SearchHotel";

export default function Hotels() {
  return (
		<>
		<div className='hotel-background' >
		<div className="holidaze">
			 <h1>Holidaze</h1>
			 < SearchHotel />
		</div>	
	 	  <div className="hotel-post"><HotelPost /></div>
		  
		  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav></div>
	  </>
	);
}
  
