import image from '../assets/jo-szczepanska-9OKGEVJiTKk-unsplash.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Blogs = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between bg-slate-100 p-5 md:p-8 gap-8  rounded-lg'>
      <div data-aos="fade-right" data-aos-duration="2000" className="  w-[50%] text-lg md:text-xl text-amber-500 font-medium">
        Welcome to the Art & CraftHaven blog, your go-to resource for all things
        art, crafting, and creativity! Here, we invite you to immerse yourself
        in a world of inspiration, innovation, and imagination. Our diverse team
        of artisans, creators, and enthusiasts curates a wealth of content to
        spark your creativity and elevate your craft. Explore a myriad of
        topics, from DIY tutorials and crafting tips to artist spotlights and
        product reviews. Dive deep into the latest trends, techniques, and tools
        shaping the art and crafting landscape. Whether you are a seasoned pro or
        just starting your creative journey, our blog caters to all skill levels
        and interests. Join our thriving community of like-minded individuals
        who share a passion for artistic expression and craftsmanship. Engage in
        lively discussions, exchange ideas, and forge connections with fellow
        artisans from around the globe. At Art & CraftHaven, we believe that
        creativity knows no bounds, and our blog is here to inspire and empower
        you on your artistic odyssey. Stay updated with regular posts, features,
        and exclusive content designed to ignite your imagination and fuel your
        artistic pursuits. From innovative project ideas to insightful articles
        on art history and design theory, there  always something new to
        discover on the Art & CraftHaven blog.
      </div>
      <div data-aos="fade-left" data-aos-duration="2000" className='w-[50%]' >
        <img className='rounded-xl' src={image} alt="" />
      </div>
    </div>
  );
};

export default Blogs;
