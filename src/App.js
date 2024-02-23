import Video from "./video/Headervideo.mp4";
import logo from "./image/logo.png";
function App() {
  return (
    <>
      {/* 헤더 */}
      <header className="w-full h-[80px] xl:h-[120px] relative">
        <div className="w-full h-full flex justify-between px-16">
          {/* 로고 */}
          <img src={logo} alt="" />
          {/* 날씨 */}
          {/* GNB 메뉴 */}
          <div className="bg-gray-500 flex space-x-20 xl:space-x-[10vw] text-white items-center text-[18px] xl:text-[25px]">
            <div className="w-20 h-full bg-black flex justify-center items-center ">
              <p className="text-white ">날씨</p>
            </div>
            <p>관광지</p>
            <p>여행 TIP</p>
            <p>SNS</p>
          </div>
        </div>
        {/* 메인 동영상 */}
        <div className="w-full h-[screen] overflow-hidden">
          <div className="w-full h-full absolute top-0 left-0 -z-10">
            <video
              muted
              autoPlay
              loop
              className="w-full h-[100vh] object-cover object-center"
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* 메인 동영상 내용 */}
        <div className=" absolute top-[350%] left-[15%]">
          <h2 className="mb-7">자연이 숨쉬는 곳 </h2>
          <h1 className="">빛나는 제주</h1>
        </div>
      </header>
      {/* 지금 제주도! 여기어떄요? */}
    </>
  );
}

export default App;
