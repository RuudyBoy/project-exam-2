import Heading from '../layout/Heading';
import bilde from "../../images/bilde.jpg"


export default function About() {
  return (
		<>
    <div className='bckg' >
    <div className='about-grid'>
    <div className='about-text'>
      <h1>About us</h1>
      <p>kfwejioj  vijgiojeroij igjioerjgio jiojgioerjiojeoerijgoijgoijergeorigjioej gij ioerjgoij giojeriojgej eroigjoeirjg orijgoeijg</p>
    </div>
    <div className="about-image">
    <img className="about-img" src={bilde} alt="Logo" />
    </div> 
    </div>
		<div className="message-container">
		</div>
    </div>
		</>
	);
}