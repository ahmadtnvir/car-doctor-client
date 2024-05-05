import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import 'animate.css';

const Banner = () => {
  return (
    // <div className="slider-container">

    <div className="carousel w-full h-[600px] rounded-xl mt-16">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full object-cover animate__animated animate__zoomIn" />
        <div className="absolute flex flex-col justify-center items-start left-0 top-0 text-white bg-gradient-to-l from-[#15151500] to-[#151515] h-full w-full pl-10 space-y-4 ">
          <h1 className="text-6xl font-bold w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-1/3">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-3 bottom-0">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover animate__animated animate__zoomIn" />
        <div className="absolute flex flex-col justify-center items-start left-0 top-0 text-white bg-gradient-to-l from-[#15151500] to-[#151515] h-full w-full pl-10 space-y-4 ">
          <h1 className="text-6xl font-bold w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-1/3">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-3 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover animate__animated animate__zoomIn" />
        <div className="absolute flex flex-col justify-center items-start left-0 top-0 text-white bg-gradient-to-l from-[#15151500] to-[#151515] h-full w-full pl-10 space-y-4 ">
          <h1 className="text-6xl font-bold w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-1/3">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-3 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full object-cover animate__animated animate__zoomIn" />
        <div className="absolute flex flex-col justify-center items-start left-0 top-0 text-white bg-gradient-to-l from-[#15151500] to-[#151515] h-full w-full pl-10 space-y-4 ">
          <h1 className="text-6xl font-bold w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-1/3">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-3 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full object-cover animate__animated animate__zoomIn" />
        <div className="absolute flex flex-col justify-center items-start left-0 top-0 text-white bg-gradient-to-l from-[#15151500] to-[#151515] h-full w-full pl-10 space-y-4 ">
          <h1 className="text-6xl font-bold w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-1/3">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-3 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full object-cover animate__animated animate__zoomIn" />
        <div className="absolute flex flex-col justify-center items-start left-0 top-0 text-white bg-gradient-to-l from-[#15151500] to-[#151515] h-full w-full pl-10 space-y-4 ">
          <h1 className="text-6xl font-bold w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-1/3">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-3 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
