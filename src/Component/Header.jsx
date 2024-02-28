import Video from "../video/Headervideo.mp4";
import logo from "../image/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false); // 해상도가 1280 미만인 경우에만 나브 메뉴가 열린 상태로 초기화

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=40e2fb8d8c310ebdcb45aa9fc840f292&units=metric"
        );
        if (!response.ok) {
          throw new Error("날씨 정보를 가져오는 데 문제가 발생했습니다.");
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const handleNavOpen = () => {
    setIsNavOpen(true);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(window.innerWidth < 1280 ? false : false); // 해상도가 1280 미만인 경우에만 나브 메뉴가 열리도록 설정
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!weatherData) return null;

  const { main, weather } = weatherData;
  const { temp } = main;
  const { icon } = weather[0];
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  const item = {
    start: { opacity: 0, y: 30 },
    end: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div>
      <header className="w-full h-[100vh] relative">
        <div className="absolute inset-0 overflow-hidden">
          <video
            muted
            autoPlay
            loop
            className="w-full h-full object-cover object-center"
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <motion.div
          opacity
          initial={{ opacity: 0, y: -100 }} // 초기 투명도와 위치 설정
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[50%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10"
        >
          <h2 className="mb-5">자연이 숨쉬는 곳</h2>
          <h1 className="">빛나는 제주</h1>
        </motion.div>
        <img
          src={logo}
          alt="로고"
          className="absolute top-4 left-2 h-[70px] xl:h-[120px]"
        />
        <div className="absolute inset-x-0 top-4 grid px-6 xl:px-8 h-[80px] xl:h-[120px]">
          <nav className="text-[32px] text-white xl:hidden justify-self-end">
            <RxHamburgerMenu
              onClick={handleNavOpen}
              className=" cursor-pointer"
            />
          </nav>
          <nav className="hidden xl:block  justify-self-end">
            <div className="text-[26px] text-white xl:flex space-x-[4vw] hidden items-center">
              <div>
                <div className="flex items-center mr-3">
                  <img src={iconUrl} alt="날씨 아이콘" className="w-[78px]" />
                  <p>{temp}℃</p>
                </div>
              </div>
              <p>관광지</p>
              <p>여행 TIP</p>
              <p>SNS</p>
            </div>
          </nav>
          <motion.nav
            className={`fixed ${
              window.innerWidth >= 1280 ? "hidden" : "flex"
            } top-0 z-20 bg-white/50 backdrop-blur-xl min-w-[300px] max-w-[500px] h-full xl:flex xl:space-x-32 text-lg xl:text-3xl right-0 transition-transform duration-300 ${
              isNavOpen
                ? "transform translate-x-0"
                : "transform translate-x-full"
            }`}
            initial={false}
            animate={isNavOpen ? "end" : "start"}
            transition={{ delayChildren: 0.05, staggerChildren: 0.1 }}
          >
            <FiX
              onClick={handleNavClose}
              className="text-[32px] absolute top-6 right-6 cursor-pointer"
            />
            <div className="mt-24 ml-[50px] text-[32px] space-y-10 h-full">
              <motion.div variants={item} className="mb-16">
                <p className="text-[20px] ml-[18px]">지금 제주도는</p>
                <div className="flex items-center">
                  <img src={iconUrl} alt="날씨 아이콘" className="w-[70px]" />
                  <p>{temp}℃</p>
                </div>
              </motion.div>
              <motion.p variants={item}>관광지</motion.p>
              <motion.p variants={item}>여행 TIP</motion.p>
              <motion.p variants={item}>SNS</motion.p>
            </div>
          </motion.nav>
        </div>
      </header>
    </div>
  );
}
