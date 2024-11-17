import { CiMedal } from "react-icons/ci";

import { IoMdCheckmark } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiShareNetworkLight, PiStudent } from "react-icons/pi";

import cyber from "/sir4.png";

const SectionIntro = () => {
  return (
    <div className="lg:px-24 px-4 lg:min-h-[90vh] h-auto mt-12">
      <div className=" flex pt-12 items-center h-full justify-center">
        <div className="w-full hidden lg:flex items-start justify-center ">
          <img
            src={cyber}
            alt=""
            className="object-cover  w-[500px] pt-12 border shadow-blue-500  rounded-xl  drop-shadow-lg"
          />
        </div>
        <div className="w-full  flex flex-col gap-4 items-start">
          <h2 className="px-4 py-1 w-26 rounded-2xl font-semibold bg-blue-200 text-blue-700   text-base ">
            About Us
          </h2>

          <h1 className="text-5xl  font-bold max-w-96 text-slate-900">
            Welcome to the Carrer Changing Institute
          </h1>
          <div className="text-gray-500 flex border-l-2 border-blue-500 p-4 ">
            Beat Exising Software Engineers of the top Tier Companies with only
            6 months of training. Lend a high paying job without waiting for
            years.
          </div>
          <div className="list-none flex flex-col  justify-start gap-5">
            {[
              "Become Software Engineer in 6 months ",
              "Explore a variety of fresh educational teachings",
              "Develop your Personality and Skills",
            ].map((item, idx) => (
              <div className="flex items-center gap-2 justify-start" key={idx}>
                <div className="w-8 h-8 hover:bg-blue-500 hover:text-white flex items-center justify-center text-blue-500 bg-blue-100">
                  <IoMdCheckmark className=" " />
                </div>
                <li>{item}</li>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex lg:gap-8 gap-12 lg:h-48 h-auto lg:py-0  pt-12 justify-evenly lg:flex-row flex-col px-4">
        {[
          { icon: CiMedal, title: " Placement Confirmed", count: "3+" },
          { icon: PiStudent, title: "Total Students", count: "14+" },
          {
            icon: PiShareNetworkLight,
            title: "Total Instrusctor",
            count: "4",
          },
          {
            icon: LiaChalkboardTeacherSolid,
            title: " Technology Training ",
            count: "20+",
          },
        ].map((item, idx) => (
          <div className="flex gap-4 items-center " key={idx + "item"}>
            <div className="text-5xl text-gray-500">
              <item.icon />
            </div>
            <div className="flex flex-col gap-0  justify-center">
              <div className="text-3xl font-bold">{item.count}</div>
              <div className="uppercase font-semibold">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionIntro;
