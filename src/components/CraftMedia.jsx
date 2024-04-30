import { Link } from "react-router-dom";

import image1 from '../assets/jess-bailey-lJU5KvoHQHk-unsplash.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const CraftMedia = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 bg-[#12132D] p-2 md:p-8 rounded-xl">
      <div data-aos="fade-up-right"  data-aos-duration="1000" className=" w-full md:w-[50%] h-full text-center text-white ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Join Our Art & CraftHaven </h1>
        <p className="my-5 text-lg md:text-xl font-medium">
          Unleash your creativity in a vibrant community of makers. Explore
          tutorials, share projects, and find all your crafting supplies in one
          place.
        </p>
       <Link to="/register">
       <button className="btn btn-outline text-white font-bold text-sm  md:text-xl ">Register Now </button>
       </Link>
      </div>

      <div data-aos="fade-up-left" data-aos-duration="1000" className="flex w-full  md:w-[50%]">
        <img  className="w-full h-full md:h-[40vh] rounded-xl" src={image1} alt="" />
       
      </div>
    </div>
  );
};

export default CraftMedia;
