import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SectionCards from "./components/SectionCards";

import SectionOne from "./components/SectionOne";
import SectionRegisteration from "./components/SectionRegisteration";

const Home = () => {
  return (
    <div className="relative">
      <BackToTop />
      <Navbar />
      <SectionOne />
      <SectionCards />
      <SectionRegisteration />

      <Footer />
    </div>
  );
};

export default Home;
