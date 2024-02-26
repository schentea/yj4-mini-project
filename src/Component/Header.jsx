import Video from '../video/Headervideo.mp4';
import logo from '../image/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    // 햄버거 메뉴 클릭 시 나브 열기
    const handleNavOpen = () => {
        setIsNavOpen(true);
    };

    // Fix 아이콘 클릭 시 나브 닫기
    const handleNavClose = () => {
        setIsNavOpen(false);
    };
    return (
        <div>
            {/* 헤더 */}
            <header className="w-full h-[100vh] relative">
                {/* 동영상 배경 */}
                <div className="absolute inset-0 overflow-hidden">
                    <video muted autoPlay loop className="w-full h-full object-cover object-center">
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
                {/* 메인 동영상 내용 */}
                <div className="absolute top-[50%] left-[10%] transform translate(-50%, -50%) text-white z-10">
                    <h2 className="mb-5 ">자연이 숨쉬는 곳</h2>
                    <h1 className="">빛나는 제주</h1>
                </div>
                {/* 로고와 메뉴 */}
                <div className="absolute inset-x-0 top-4 flex justify-between items-center px-6 xl:px-16 h-[80px] xl:h-[120px]">
                    {/* 로고 */}
                    <img src={logo} alt="로고" className="h-[70px] xl:h-full" />
                    {/* 메뉴 */}
                    <nav className="text-[32px] text-white xl:hidden">
                        <RxHamburgerMenu onClick={handleNavOpen} />
                    </nav>
                    {/* PC,Tablet 에서 보이는  NAV */}
                    <nav className="hidden xl:block">
                        {' '}
                        <div className="text-[32px] h-full text-white xl:flex space-x-[10vw] hidden">
                            <div>
                                <p>날씨</p>
                            </div>
                            <p>관광지</p>
                            <p>여행 TIP</p>
                            <p>SNS</p>
                        </div>
                    </nav>
                    {/* MOBILE 나브 */}
                    <nav
                        className={`fixed top-0 z-20 bg-slate-500 w-1/2 h-full xl:flex xl:space-x-32 text-white text-lg xl:text-3xl right-0 transition-transform duration-300 ${
                            isNavOpen ? 'transform translate-x-0' : 'transform translate-x-full'
                        }`}
                    >
                        <FiX onClick={handleNavClose} className="text-[32px] absolute top-6 right-6" />
                        <div className="mt-24 ml-[200px] text-[32px] space-y-10 h-full">
                            <div className="mb-32">
                                <p>날씨</p>
                            </div>
                            <p>관광지</p>
                            <p>여행 TIP</p>
                            <p>SNS</p>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
