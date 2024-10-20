import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  return (
    <div className="flex z-50 items-center rounded-full justify-center h-14 w-14 fixed text-blue-600   bg-gray-100 bottom-5 right-5 shadow-md ">
      <FaChevronUp size={20} />
    </div>
  );
};

export default BackToTop;
