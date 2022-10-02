
import bergen from "../../images/bergen.png"


export default function About() {
  return (
		<>
    <div className='about-container'>
    <div className="about-image">
    <img className="about-img" src={bergen} alt="Logo" />
    </div> 
    <div className='about-text'>
      <h1>About Holidaze</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae sem sit amet risus malesuada facilisis eu ut leo. Donec sagittis ut tortor ac vehicula. Cras gravida interdum ex, vel dapibus sem aliquam eget. Aenean at massa et orci sollicitudin mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget tortor pretium, cursus ante ac, suscipit ex. Nullam dignissim ligula enim, id hendrerit ligula semper nec. Donec libero nulla, interdum vitae ligula eget, laoreet dapibus nunc. Nulla ac ligula non dolor viverra congue. Suspendisse in velit et ligula tincidunt vulputate in a mauris.</p>
      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec auctor ut ligula at luctus. Suspendisse fringilla sed tellus vel rutrum. Quisque commodo ante vel eros laoreet porta. Sed quis erat rutrum, varius neque a, dictum libero. Fusce ullamcorper augue sem, ac eleifend enim egestas vulputate. Curabitur eget purus nisi. Nunc sit amet turpis libero. Aenean tempor suscipit mi, at commodo nisi posuere mattis. Nulla scelerisque felis in maximus blandit. Nunc dapibus, massa ac mollis lobortis, velit neque mattis libero, at tempus felis lectus eget tellus.</p>
    </div>
    </div>
		</>
	);
}