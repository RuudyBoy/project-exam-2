import { FaFacebook, FaHandPointDown, FaInstagram, FaPhone, FaRegCopyright, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    <div className='footer'>
    <div className='grid-footer'>
        <div className='phone-support'>
            <p className='footer-title'>Phone support</p>
            <p>< FaPhone/> +98746342514</p>
            <p>Copyright <FaRegCopyright/> 2022</p>
        </div>
        <div className='follow-us'>
            <p  className='footer-title'>Follow us</p>
            <p>Social media</p>
            <FaFacebook className='some' />
            <FaInstagram className='some'/>
            <FaTwitter className='some'/>
        </div>
        <div className='subscribe'>
            <p className='footer-title'>Our Newsletter</p>
            <label>Subscribe here</label>
        </div>  
    </div>
    </div>
    </>
  );
}