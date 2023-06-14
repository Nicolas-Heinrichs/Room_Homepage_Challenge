const DesktopNav = (props) => {
  const liStyle =
    "text-base lg:text-2xl  mx-4 hover:cursor-pointer flex flex-col ";
  const underLine = "bg-White h-1 w-8 top-10 self-center absolute invisible";
  return (
    <div className="absolute flex top-10 lg:top-20 left-10 lg:left-20 ">
      <img
        src="images/logo.svg"
        alt="logo room"
        className="h-full self-center mr-4 lg:mr-14 relative"
      ></img>
      <ul className="text-White flex">
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
  );
};

export default DesktopNav;
