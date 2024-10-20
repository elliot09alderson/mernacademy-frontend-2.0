import { TbStairsUp } from "react-icons/tb";
import { FaArrowRightLong, FaPaintbrush } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
const SectionOne = () => {
  return (
    <div className=" w-full bg-[#f5f5fd]  justify-between flex items-center  mt-20 py-12 px-24 shadow-sm   ">
      <div className="flex flex-col w-full gap-8">
        <h2 className="px-4 py-1 w-36 rounded-2xl font-semibold bg-blue-200 text-blue-700   text-base ">
          Popular Stack
        </h2>

        <h1 className="text-4xl font-bold max-w-96 text-slate-900">
          Provide It & Technol Subject For You
        </h1>
        <p className="text-gray-500 font-base font-semibold">
          Construction is a general term meaning the art and science to form
          systems organizations, and comes from Latin Construction is
        </p>

        <div className="p-2 border-l-4  border-gray-500 ">
          Construction is a general term meaning the art and science to form
          systems organizations, and comes from Latin Construction is a
          organizations, and comes from Latin construction and Old
        </div>

        <button className="bg-gray-600 flex items-center gap-2 justify-center px-6 py-3 text-base w-44 rounded-sm   text-white">
          <h2>Explore More</h2>
          <FaArrowRightLong className="pt-1" />
        </button>
      </div>

      <div className="w-full flex items-center justify-end flex-wrap gap-8 relative  pb-12">
        <img
          className="absolute z-0 drop-shadow-3xl  shadow-blue-200"
          src="/section1/bg.png"
        />
        {[
          {
            icon: GrTechnology,
            label: "Trending Technology",
            detail:
              "Construction is a general term the art and science to form",
            path: "/tech",
          },
          {
            icon: FaPaintbrush,
            label: "Art & Design",
            detail:
              "Construction is a general term the art and science to form",
            path: "/tech",
          },
          {
            icon: TbStairsUp,
            label: "Support Growth",
            detail:
              "Construction is a general term the art and science to form",
            path: "/tech",
          },
          {
            icon: FaLightbulb,
            label: "Pay after Placement",
            detail:
              "Construction is a general term the art and science to form",
            path: "/tech",
          },
        ].map((item, idx) => (
          <div
            className={` cursor-pointer ${
              idx % 2 == 0 ? "" : " translate-y-4 "
            }  relative `}
            key={idx + "card"}
          >
            <div className="rounded-xl flex flex-col gap-4 p-8 h-64 w-64 bg-white shadow-md  shadow-blue-200 hover:-translate-y-4 group duration-700 hover:bg-blue-600 hover:text-white  ">
              <item.icon size={30} />
              <h2 className="font-semibold text-xl">{item.label}</h2>
              <p className="text-gray-600 group-hover:text-white duration-700  ">
                {item.detail}
              </p>
              <div className=" hover:text-white  flex items-center  gap-2 text-sm font-semibold">
                <h2>View Subject</h2>
                <FaArrowRightLong className="pt-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
