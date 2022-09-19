import Heading from '../layout/Heading';
import SendEnquiry from './EnquiryPost';

export default function Enquiry() {
  return (
    <>
    <div className='home-page'>
      <Heading title=" Send Enquiry" />
      <h2>Send Enquiry</h2>
      <SendEnquiry/>
    </div>
    </>
  );
}