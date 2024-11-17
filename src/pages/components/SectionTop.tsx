import gradient from "/gradient.png";
// import pratik from "/pratik.png";
import pratik from "/choi.png";
import triangle from "/triangle.png";
import triangle2 from "/triangle2.png";
import chatgpt from "/chatgpt.png";
import nodejs from "/nodejs.jpg";
import js from "/js.png";
import css from "/css.png";
// import square from "/square.png";

const SectionTop = () => {
  return (
    <div className="lg:px-24 pt-12  mt-8 lg:mt-12">
      <div className="flex bg-slate-900 flex-col py-12 lg:py-0   gap-4 lg:flex-row rounded-t-none rounded-2xl lg:rounded-2xl h-auto lg:h-[80vh]  lg:px-12  px-4">
        <div className="text-white flex relative flex-col gap-8 justify-center">
          <div className="absolute top-10 left-0">
            <img src={triangle} alt="" />
          </div>
          <h2 className="text-slate-100/50 uppercase tracking-[5px]">
            A Software Training Institute
          </h2>
          <h1 className="text-[3rem] font-bold">
            100% Placement Gurantee Institute
          </h1>
          <p className="text-lg font-semibold">
            Dont waste money and time on degrees and colleges. Build your Carrer
            with our pocket friendly courses
          </p>
          <div className="flex items-center">
            <button className="px-4 py-3 bg-white text-slate-900 font-semibold rounded-sm">
              View Courses
            </button>
            <div className="flex px-8 py-3">Find out more ➡</div>
          </div>
        </div>
        <div className="relative w-full flex   items-center justify-center  ">
          <div className="absolute top-0 left-0  ">
            <img src={gradient} alt="" />
          </div>
          <div className="absolute bottom-20 right-20">
            <img src={triangle2} alt="" />
          </div>
          <img
            src={pratik}
            alt=""
            className="hidden lg:block w-96 relative  z-10 "
          />
          <div className=" absolute z-10 top-10 right-0 ">
            {/* <img src={square} alt="" className="w-28 rotate-3" /> */}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row  items-center gap-8 shadow-xl mt-4  justify-evenly px-4">
        {[chatgpt, nodejs, js, css].map((item, idx) => (
          <div className="flex gap-4 items-center py-8" key={idx + "item"}>
            <img src={item} className="w-48" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTop;
