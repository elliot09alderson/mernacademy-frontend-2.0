import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SectionCards from "./components/SectionCards";

import SectionOne from "./components/SectionOne";
import SectionRegisteration from "./components/SectionRegisteration";
import SectionIntro from "./components/SectionIntro";
import SectionTop from "./components/SectionTop";
const Home = () => {
  return (
    <div className="relative">
      <BackToTop />
      <Navbar />
      <SectionTop />
      <SectionIntro />
      <SectionOne />
      <SectionCards />
      <SectionRegisteration />
      <Footer />
    </div>
  );
};

export default Home;
