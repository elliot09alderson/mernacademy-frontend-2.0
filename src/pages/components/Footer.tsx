import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" h-auto lg:h-[100vh] w-full  bg-[#0d0e2c] px-2 lg:px-24">
      {/* first section */}

      <div className=" lg:h-[26vh] h-auto flex lg:flex-row py-8 flex-col items-center justify-between">
        <div className="py-12 flex flex-col gap-4">
          <h1 className=" text-white font-bold text-4xl heading">
            Still You Need Our <span className="text-blue-700">Support ?</span>
          </h1>
          <h2 className="text-lg text-gray-400 font-semibold">
            Don’t wait make a smart & logical quote here. Its pretty easy.
          </h2>
        </div>
        <div className="flex flex-row gap-2  items-center justify-center">
          <input
            type="text"
            className="h-16 rounded-md pl-4 w-64 lg:w-96 text-slate-600 bg-slate-800  "
            placeholder="Enter your Email here"
          ></input>
          <button className="bg-blue-700 lg:px-8 px-4 lg:py-5 py-2 hover:bg-slate-900/30 rounded-md text-white font-semibold duration-700 ease-out  hover:ring-blue-500 hover:ring-1">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* second section */}
      <div className="border border-slate-700 border-b-0 border-l-0 border-r-0  border-t flex lg:flex-row flex-col items-center gap-8 justify-between py-24 w-full text-slate-300 list-none text-base">
        <div className="w-full flex flex-col gap-6 ">
          <h2 className="text-2xl text-white font-bold">About us</h2>

          <div>
            orporate clients and leisure travelers has been relying on
            Groundlink for dependable safe, and professional chauffeured car end
            service in major cities across World.
          </div>
          <div></div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-2xl text-white font-bold">About us</h2>
          <div className="flex flex-col gap-4  ">
            {[
              { label: "About Us", path: "/about" },
              { label: "Teachers", path: "/teacher" },
              { label: "Partner", path: "/partner" },
              { label: "Room-Details", path: "/rooms" },
              { label: "Gallery", path: "gallery" },
            ].map((item, idx) => (
              <Link to={item.path} key={idx + "link"}>
                <li>{item.label}</li>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-2xl text-white font-bold">Course</h2>
          <div className="flex flex-col gap-4">
            {[
              { label: "Ui Ux Design", path: "/about" },
              { label: "Web Development", path: "/teacher" },
              { label: "Business Strategy", path: "/partner" },
              { label: "Softwere Development", path: "/rooms" },
              { label: "Business English", path: "gallery" },
            ].map((item, idx) => (
              <Link to={item.path} key={idx + "link"} className="">
                <li>{item.label}</li>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full text-white flex  flex-col gap-6">
          <h2 className="text-2xl font-bold text-white">Recent Post</h2>
          <div className="flex flex-col gap-5 items-start justify-center">
            {[
              { label: "About Us", path: "/about", img: "/footer/study.jpeg" },
              {
                label: "Teachers",
                path: "/teacher",
                img: "/footer/study.jpeg",
              },
              { label: "Partner", path: "/partner", img: "/footer/study.jpeg" },
            ].map((item, idx) => (
              <Link to={item.path} key={idx + "link"}>
                <div className="flex items-center justify-center gap-2 ">
                  <img
                    src={item.img}
                    alt="ss"
                    className="object-cover w-16 h-14"
                  />
                  <div className="flex flex-col gap-1 justify-center ">
                    <span className="text-xs">02 Apr 2024</span>
                    <h2 className="text-white font-semibold text-sm hover:text-blue-700">
                      Nice Your Business
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="lg:px-12 px-2 flex items-center lg:gap-0 lg:py-0 gap-2 py-4 flex-col lg:flex-row justify-between ">
        <div className="w-full text-white text-3xl font-semibold">logo</div>
        <div className="text-white text-base w-full lg:min-w-96  ">
          Copyright © 2024 by edurock. All Rights Reserved.
        </div>
        <div className="flex items-center lg:justify-center w-full gap-3">
          {[
            { icon: FaFacebookF, path: "/facebook" },
            { icon: FaTwitter, path: "/facebook" },
            { icon: RiLinkedinFill, path: "/facebook" },
            { icon: AiFillInstagram, path: "/facebook" },
            { icon: FaYoutube, path: "/facebook" },
          ].map((item, idx) => (
            <div
              key={idx + "social"}
              className="w-10 h-10 flex items-center bg-slate-800 text-white justify-center"
            >
              <item.icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
