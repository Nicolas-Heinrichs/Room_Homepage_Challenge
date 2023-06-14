const ArrowBtn = (props) => {
  const arrowBtnStyle =
    "h-full w-1/2 m-0 p-0 hover:bg-VeryDarkGray flex content-center justify-around  flex-wrap cursor-pointer ";

  return (
    <div className="absolute sm:h-[15%] sm:w-[11%] w-[25vw]  h-[5vh] bg-Black sm:top-[57vh] top-[25vh]  sm:bottom-0 sm:left-[58.5%] flex flex-row right-0 z-10">
      <div className={arrowBtnStyle} onClick={props.previousView}>
        <svg
          width="14"
          height="24"
          viewBox="0 0 20 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" />
        </svg>
      </div>
      <div className={arrowBtnStyle} onClick={props.nextView}>
        <svg
          width="14"
          height="24"
          viewBox="0 0 20 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default ArrowBtn;
