import { useState } from "react";
import Burger from "./Burger";
import Close from "./Close";

const MobileNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const liStyle = "text-xl hover:cursor-pointer flex flex-col self-center";
  const underLine = "bg-White h-1 w-8 top-10 self-center absolute invisible";
  return (
    <div className={`absolute w-full h-[8vh] ${isOpen && "bg-White"}`}>
      <div className="h-full w-full flex justify-center content-center flex-wrap">
        {!isOpen ? (
          <Burger toggleMenu={toggleMenu} />
        ) : (
          <Close toggleMenu={toggleMenu} />
        )}
        <ul
          className={`text-Black flex justify-evenly w-full h-full flex-wrap pt-1 ps-16 absolute z-10 ${
            !isOpen && "hidden"
          }`}
        >
          <li
            className={liStyle}
            onMouseOver={props.handleMouseOver}
            onMouseOut={props.handleMouseOut}
          >
            <div className={underLine}></div>
            home
          </li>
          <li
            className={liStyle}
            onMouseOver={props.handleMouseOver}
            onMouseOut={props.handleMouseOut}
          >
            <div className={underLine}></div>
            shop
          </li>
          <li
            className={liStyle}
            onMouseOver={props.handleMouseOver}
            onMouseOut={props.handleMouseOut}
          >
            <div className={underLine}></div>
            about
          </li>
          <li
            className={liStyle}
            onMouseOver={props.handleMouseOver}
            onMouseOut={props.handleMouseOut}
          >
            <div className={underLine}></div>
            contact
          </li>
        </ul>
      </div>
      <img src="images/logo.svg" className="absolute top-10 left-[40%]"></img>
    </div>
  );
};

export default MobileNav;
