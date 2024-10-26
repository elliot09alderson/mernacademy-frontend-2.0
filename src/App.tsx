import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Lenis from "lenis";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for smoothness
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      // direction: "vertical", // Scroll direction (horizontal is also possible)
      // smooth: true,
    });

    // const onScroll = (e: any) => {
    //   // console.log(e);
    // };

    // lenis.on("scroll", onScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // return () => {
    //   lenis.off("scroll", onScroll); // Clean up event listener
    // };
  }, []);

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/demo",
      element: <Demo />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
