import { FaFacebook, FaHandPointDown, FaInstagram, FaPhone, FaRegCopyright, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    <div className='footer'>
    <div className='grid-footer'>
        <div>
            <h3 >Phone support</h3>
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
    </div>
    </>
  );
}