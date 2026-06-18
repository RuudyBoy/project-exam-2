import { FaFacebook, FaInstagram, FaPhone, FaRegCopyright, FaTwitter } from 'react-icons/fa';
import logo from "../../images/holidazeform128.png";

export default function Footer() {
  return (
    <>
    <div className='footer'>
    <div className='grid-footer'>
        <div>
            <img src={logo} alt="Holidaze Logo" style={{ maxWidth: '150px', marginBottom: '15px' }} />
            <p>< FaPhone/> +98746342514</p>
            <p>Copyright <FaRegCopyright/> 2022</p>
        </div>
        <div>
            <h3>Follow us</h3>
            <p>Social media</p>
            <FaFacebook className='some' />
            <FaInstagram className='some'/>
            <FaTwitter className='some'/>
        </div>
        <div>
            <h3>Legal</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
        </div>  
    </div>
    <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #333', fontSize: '0.9rem', color: '#999' }}>
        <p><em>Disclaimer: This site is for design and code purposes only for a project exam. It is not an actual hotel website and no real bookings can be made.</em></p>
    </div>
    </div>
    </>
  );
}