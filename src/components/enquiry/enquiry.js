import { Link } from 'react-router-dom';
import SendEnquiry from './EnquiryPost';

export default function Enquiry() {
  return (
    <>
    <div className="enquiry-background">
      <div className="sendenquiry-inner">
        <div>
          < SendEnquiry />
        </div>
        <div>
          <Link to="/hotels" className="back-link">Back to hotels page</Link>
        </div>
      </div>
     
   
    </div>
    </>
  )
}