import Heading from '../layout/Heading';

export default function Home() {
  return (
    <>
    <div className='home-page'>
      <Heading title="Welcome to Holidaze!" />
      <h2>Find a hotel in the beatiful city of Bergen.</h2>
      <a className='home-cta' href='/hotels'>Book Hotel</a>
    </div>
    </>
  );
}