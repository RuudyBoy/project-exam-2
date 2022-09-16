import { FaFacebook, FaHandPointDown, FaInstagram, FaPhone, FaRegCopyright, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    <div className='footer'>
    <div className='grid-footer'>
        <div className='phone-support'>
            <h3>Phone support</h3>
            <p>< FaPhone/> +98746342514</p>
        </div>
        <div className='follow-us'>
            <h3>Follow us</h3>
            <p>Social media</p>
            <FaFacebook className='some' />
            <FaInstagram className='some'/>
            <FaTwitter className='some'/>
        </div>
        <div className='subscribe'>
            <h3>Our Newsletter</h3>
            <label>Subscribe here</label>
            <p> < FaHandPointDown/> </p>
            <input className="subscribe-input" name="email" type={"email"}></input><button>Send</button>
        </div>
        
    </div><div className='copyright'>
          <p>Copyright <FaRegCopyright/> 2022</p>
        </div></div>
    </>
  );
}