import { useState } from "react";
import About from "./components/About";
import Description from "./components/Description";
import NavBar from "./components/nav/NavBar";
import ArrowBtn from "./components/ArrowBtn";

import titles from "./constants/titles";
import descriptions from "./constants/descriptions";

function App() {
  const [changeView, setChangeView] = useState(0);

  const nextView = () => {
    changeView < titles.length - 1
      ? setChangeView(changeView + 1)
      : setChangeView(0);
  };
  const previousView = () => {
    changeView === 0
      ? setChangeView(titles.length - 1)
      : setChangeView(changeView - 1);
  };

  return (
    <div className="h-screen w-screen">
      <div className="sm:h-[67%] sm:w-full flex relative sm:flex-row flex-col">
        <ArrowBtn nextView={nextView} previousView={previousView} />
        <img
          src={`images/desktop-image-hero-${changeView + 1}.jpg`}
          alt=""
          className="sm:h-full sm:w-[58.5%] w-full h-[30vh]"
        />
        <NavBar />
        <Description
          currentTitle={titles[changeView]}
          currentDescription={descriptions[changeView]}
        />
      </div>
      <div className="sm:h-[33%] sm:w-full flex flex-col sm:flex-row">
        <img
          src="images/image-about-dark.jpg"
          alt=""
          className="h-full sm:w-[29.5%] "
        />
        <About />
        <img
          src="images/image-about-light.jpg"
          alt=""
          className="h-full sm:w-[30.5%] "
        />
      </div>
    </div>
  );
}

export default App;
