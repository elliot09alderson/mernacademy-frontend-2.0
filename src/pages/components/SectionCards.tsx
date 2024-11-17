import { useEffect, useState } from "react";
import { FaBook, FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const SectionCards = () => {
  const mycourses = [
    {
      branch: "Artificial Intelligence",
      duration: "1 month",
      lessons: 8,
      price: 4000,
      author: "Pratik Verma",
      discount: 20,
      Free: true,
      rating: 5,
      authorIcon: "/cards/user.jpg",
      title: "Master 4 major AI Applications",
      img: "/cards/ai.jpeg",
      topic: ["Engineering"],
    },
    {
      topic: ["Editing"],
      branch: "Video Editing",
      duration: "2 to 3 Months ",
      lessons: "60+",
      price: 34000,
      author: "Abhishek",
      discount: 20,
      Free: true,
      rating: 5,
      authorIcon: "/cards/user.jpg",
      title: "Video Editing Mastery with Advanced VFX",
      img: "/cards/vfx.jpeg",
    },
    {
      branch: "MERN",
      topic: ["Engineering", "Placement"],

      duration: "4 to 6 Months ",
      lessons: "60+",
      price: 34000,
      author: "Pratik & DK Sir",
      discount: 20,
      Free: true,
      rating: 5,
      authorIcon: "/cards/user.jpg",
      title: "Zero to Job ready Full Stack WEB Development ",
      img: "/cards/web.png",
    },

    {
      topic: ["Engineering"],
      branch: "PC Master",
      duration: "2 months",
      lessons: 34,
      price: 10000,
      author: "Pratik & Abhishek",
      discount: 20,
      Free: true,
      rating: 5,
      authorIcon: "/cards/user.jpg",
      title: "Complete Hardware + Software Basics with Live Practical",
      img: "/cards/pc.jpg",
    },
    {
      branch: "Graphic Designing",
      topic: ["Editing", "Placement"],
      duration: "2 months",
      lessons: 26,
      price: 6000,
      author: "Abhishek & Yashaswi",
      discount: 20,
      Free: true,
      rating: 5,
      authorIcon: "/cards/user.jpg",
      title: "Graphic + Product Designing with All Adobe tools",
      img: "/cards/graphic.jpeg",
    },
    {
      branch: "personality Development",
      topic: ["Personality"],
      duration: "3 months",
      lessons: 40,
      price: 3400,
      author: "Pratik & Abhishek",
      discount: 20,
      Free: true,
      rating: 5,
      authorIcon: "/cards/pk.jpg",
      title:
        "English Speaking & Personality Development / Interview Preperation",
      img: "/cards/pd.jpg",
    },
  ];
  const [courses, setCourses] = useState(mycourses);
  const [active, setActive] = useState(0);
  const [topic, setTopic] = useState("See All");

  useEffect(() => {
    setCourses(mycourses);
  }, [active]);
  return (
    <div className="flex  pb-24 flex-col items-center justify-center w-full px-4 lg:px-24">
      <div className="flex items-center flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-col gap-4 py-8 w-full">
          <h2 className="px-4 py-1 w-28 rounded-2xl font-semibold bg-blue-200 text-blue-700   text-base ">
            Course List
          </h2>

          <h1 className="text-4xl font-bold lg:max-w-96 w-full text-slate-900">
            Perfect Courses to grow Your Carrer
          </h1>
        </div>
        <div className="w-full divide-y  h-auto flex-col lg:flex-row flex items-center shadow-sm lg:py-4 py-8 rounded-lg shadow-blue-400 justify-center gap-8 font-semibold">
          {[
            "See All",
            "Editing",
            "Engineering",
            "Placement",
            "Personality",
          ].map((item, idx) => (
            <h2
              onClick={() => {
                setActive(idx);

                setTopic(item);
              }}
              key={idx + "option"}
              className={`${
                active == idx
                  ? " text-blue-600 "
                  : "text-gray-700 px-2 hover:text-blue-600 py-1 cursor-pointer transition-all  duration-500"
              } `}
            >
              {item}
            </h2>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-12 mt-8 lg:mt-0  justify-between">
        {courses
          .filter((item) =>
            topic == "See All" ? true : item.topic.includes(topic)
          )
          .map((item, idx) => (
            <div
              key={idx + "card"}
              className="p-4 flex bg-white  cursor-pointer flex-col shadow-lg shadow-blue-100 group w-[380px]"
            >
              <div className="relative w-full overflow-hidden rounded-sm ">
                <div className="max-w-48 bg-blue-600 text-white font-semibold text-sm rounded-sm px-2 absolute z-10 top-2 left-2  ">
                  {" "}
                  {item.branch}
                </div>
                <img
                  src={item.img}
                  className=" cursor-pointer group-hover:scale-110  duration-700 transition-all  w-full h-[220px] shadow-sm rounded-md object-cover"
                  alt="img1"
                />
              </div>
              <div className=" flex flex-col  gap-4">
                <div className="flex gap-12 items-center  text-gray-500 font-semibold text-sm pt-4">
                  <div className="flex items-center justify-center gap-1 py-1">
                    <IoMdTime className="text-blue-600" size={18} />
                    <span className="">
                      {item.lessons + " "}
                      Lesson
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <FaBook className="text-blue-600" size={18} />
                    <span className="">
                      <span>{item.duration} </span>
                      Course
                    </span>
                  </div>
                </div>
                <h1 className=" text-slate-900 text-lg font-semibold">
                  {item.title}
                </h1>
                <div className="flex justify-start gap-12 items-center pb-2">
                  <div className="flex items-center justify-center gap-1 font-semibold">
                    <h2 className="text-xl text-blue-700">
                      ₹ {item.price - (item.price * item.discount) / 100}
                      {".00  /"}
                    </h2>

                    <span className="line-through text-gray-500">
                      {" " + item.price}
                    </span>
                  </div>
                  {/* <h2
                  className={`${
                    item.Free
                      ? " text-green-500 "
                      : " text-gray-500 line-through "
                  }  font-semibold text-base `}
                >
                  Free
                </h2> */}
                </div>

                <div className="border-t pt-4 gap-2 border-gray-200 flex items-center justify-between">
                  <div className="flex gap-2 items-center justify-center">
                    <img
                      src={item.authorIcon}
                      className="object-cover w-8 h-8 rounded-full"
                      alt=""
                    />
                    <h2 className="font-semibold text-sm">{item.author}</h2>
                  </div>

                  <div className="flex items-center justify-center gap-1.5">
                    {[...Array(item.rating)].map(() => (
                      <FaStar className="text-yellow-600" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionCards;
