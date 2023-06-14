import { useState, useEffect } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseOver = (event) => {
    event.target.firstChild.classList.remove("invisible");
  };
  const handleMouseOut = (event) => {
    event.target.firstChild.classList.add("invisible");
  };

  return (
    <>
      {screenWidth > 640 ? (
        <DesktopNav
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
      ) : (
        <MobileNav
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
      )}
    </>
  );
};

export default NavBar;
