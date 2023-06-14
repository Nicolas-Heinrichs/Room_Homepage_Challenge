const Description = (props) => {
  const shopNowStyle = "tracking-[.8rem] text-2xl font-bold self-center pr-6";
  return (
    <div className="relative h-[90%] w-full sm:w-[41.5%] flex flex-col justify-center p-10 sm:px-[5%] lg:px-[7%]">
      <h1 className="text-5xl font-bold lg:text-6xl">{props.currentTitle}</h1>
      <p className="text-DarkGray text-xl pt-6 ">{props.currentDescription}</p>
      <button className="flex hover:text-DarkGray hover:fill-DarkGray flex-row pt-8 ">
        <span className={shopNowStyle}>SHOP</span>
        <span className={shopNowStyle}>NOW</span>
        <svg
          width="60"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center"
        >
          <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" />
        </svg>
      </button>
    </div>
  );
};

export default Description;
