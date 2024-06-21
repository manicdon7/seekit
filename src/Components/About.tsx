import img from '../Assets/Startup business landing page, isometric rocket.png';


const About: React.FC = () => {
  return (
    <main className="mx-28 py-10">
      <div className='text-4xl font-anton capitalize font-semibold text-left'>
        why this platform
      </div>
      <div className='grid grid-cols-2 mt-10'>
        <div>
          <img src={img} alt='Image'/>
        </div>
        <div className=''>
        <p className='text-xl font-light text-[#EEEEEE]'>SeekIt is dedicated to bridging the gap between lost items and their rightful owners. Our mission is to create a community-driven platform where people can easily report and find lost possessions, ensuring valuable items are returned to their owners swiftly and securely.</p>
        <div className='pt-10'>
        <h1 className='text-2xl font-semibold'>Report Lost Items</h1>
        <p>Users can quickly create a report for their lost items, including descriptions, photos, and the last known location.</p>
        </div>
        <div>
          <h1>Community Assistance</h1>
          <p>The platform leverages the power of community by allowing users to browse reports of found items and match them with the reported lost items.</p>
        </div>
        <div>
          <h1>Intelligent Matching</h1>
          <p>SeekIt uses advanced algorithms to match lost items with found items based on descriptions, photos, and location data.</p>
        </div>
        <div>
          <h1>Secure Communication</h1>
          <p>Once a match is identified, SeekIt facilitates secure communication between the finder and the owner to arrange for the item's return.</p>
        </div>
        <div>
          <h1>Reward System</h1>
          <p>To encourage community participation, SeekIt includes a reward system where users can offer and receive rewards for returning lost items.</p>
        </div>
        </div>
      </div>
    </main>
  );
}

export default About;
