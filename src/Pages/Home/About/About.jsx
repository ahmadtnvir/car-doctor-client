import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-24 rounded-xl ">
      <div className="hero-content flex-col lg:flex-row gap-20 lg:gap-0">
        <div className='lg:w-1/2 relative'>
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-2 border-8 border-white"
        />
        </div>
        <div className='lg:w-1/2'>
          <p className="text-5 text-[#FF3811] font-bold mb-5">About Us</p>
            <h1 className='text-5xl font-bold text-[#151515] w-3/4 mb-8'>
            We are qualified & of experience in this field
            </h1>
          <p className="text-[#737373] capitalize mb-5">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="text-[#737373] capitalize mb-8">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.   
          </p>
          <button className="btn bg-[#FF3811] text-[#FFFFFF]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
