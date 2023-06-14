const Burger = (props) => {
  return (
    <img
      src="images/icon-hamburger.svg"
      className="absolute top-10 left-5 cursor-pointer z-20"
      onClick={props.toggleMenu}
    />
  );
};

export default Burger;
