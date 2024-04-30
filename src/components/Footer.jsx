import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-10 bg-[#1A1919] text-[#FFFFFF] mb-0">
      <div className="container mx-auto px-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-between ">
        <nav className="flex flex-col">
        <Link to= '/' className="btn btn-ghost text-xl md:text-2xl lg:text-3xl flex gap-0 text-primary font-medium md:font-semibold lg:font-extrabold  animate__animated animate__zoomIn animate__delay-2000">Craft<span className="text-pink-500">Haven</span></Link>
          <a className="link link-hover my-5">
          Where imagination thrives and creativity flourishes in every stitch and stroke.
          </a>
          <div className="flex gap-8 text-2xl text-blue-500">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaGithub />
            </span>
            <span>
              <FaTwitter />
            </span>
          </div>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Pages</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">All Craft</a>
          <a className="link link-hover">Add Craft</a>
          <a className="link link-hover">My List</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Art&Craft Items</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
      </div>
      <div className="container mx-auto px-8">
        <hr className="my-12" />
        <div className="flex flex-col lg:flex-row gap-6 justify-between ">
          <p className="link link-hover">
            @2023 Craft Haven. All Rights Reserved
          </p>
          <p className="link link-hover">Powered by Craft Haven</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;