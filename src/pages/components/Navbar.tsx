import { FaCircleUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  interface NavItem {
    label: string;
    path: string;
  }

  const navItems: NavItem[] = [
    { label: "Demos", path: "/demo" },
    { label: "Courses", path: "/courses" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "e-Commerce", path: "/ecommerce" },
  ];
  return (
    <div className="h-20 bg-white rounded-b-xl  flex top-0 z-50 mb-20 fixed lg:w-[99vw] w-full shadow-md list-none flex-row  justify-between items-center lg:px-24  px-2   text-slate-900">
      <div>
        <img
          src={"/logo/logo.png"}
          alt=""
          className="object-cover mix-blend-difference w-64 drop-shadow-md"
        />
      </div>
      <div className="lg:flex  items-center gap-12 hidden  w-[50vw]  justify-center">
        {navItems.map((item, idx) => (
          <Link key={idx + item.path} to={item.path}>
            <li className="hover:text-blue-700 px-2 py-1 font-semibold text-sm lg:text-lg">
              {item.label}
            </li>
          </Link>
        ))}
      </div>

      <div className="w-full">
        <div className="flex items-center cursor-pointer gap-4 justify-between w-full lg:justify-center">
          <div className="bg-white p-2">
            <IoMdCart size={25} />
          </div>
          <div className="bg-white rounded-sm p-2 border ">
            <FaCircleUser size={25} />
          </div>
          <button className="px-4 py-3 rounded-sm lg:w-32 w-28  bg-blue-600 text-white font-semibold text-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
