import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='phone-support'>
            <h3>Phone support</h3>
            <p>+98746342514</p>
            <p>Copyright</p>
        </div>
        <div className='follow-us'>
            <h3>Follow us</h3>
            <p>Social media</p>
            <FaFacebook className='facebook' />
            <FaInstagram className='instagram'/>
            <FaTwitter className='twitter'/>
        </div>
        <div className='subscribe'>
            <h3>Our Newsletter</h3>
            <label>Subscribe here</label>
            <input className="subscribe-input" name="email" type={"email"}></input><button>Send</button>
        </div>
    </div>   
    </>
  );
}