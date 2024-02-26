import Video from './video/Headervideo.mp4';
import logo from './image/logo.png';
import FooterLogo from './image/footerlogo.jpg';
import Chat from './image/chat.jpg';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa6';
import minilogo1 from './image/minilogo1.jpg';
import minilogo2 from './image/minilogo2.jpg';
import minilogo3 from './image/minilogo3.jpg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiX } from 'react-icons/fi';
import Harbang from './image/Harbang.jpg';
function App() {
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
        <>
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
            {/* 지금 제주도! 여기어떄요? */}
            <section className="w-full xl:h-[200vh] xl:flex-row pb-16 bg-[url('./image/bg.jpg')] bg-cover bg-center bg-fixed flex flex-col items-center ">
                {/* 왼쪽 공간 */}
                <div className="w-1/3 h-2/3 flex flex-col justify-center items-center  mx-auto xl:ml-20">
                    {/* 주황색 제목 */}
                    <div className="w-[500px] text-center md:text-left xl:ml-32 overflow-hidden ">
                        <div className="mb-4 mt-16 ">
                            <h2 className="font-bold xl:text-7xl text-6xl  text-[#EF6D00]">지금 제주도!</h2>
                            <h2 className="font-bold xl:text-7xl text-6xl text-[#EF6D00]">여기 어때요?</h2>
                        </div>
                        {/* 아래 텍스트 */}
                        <div className="text-[20px] text-white ">
                            <p>
                                웅대한 자연과 다양한 볼거리로 가득한 곳, 전통을 지키고 발전시키는 제주도의 특별한
                                여행지들을 소개합니다.
                            </p>
                        </div>
                    </div>
                </div>
                {/* 오른쪽 공간 */}
                <div className="w-2/3 h-full flex xl:ml-16 ">
                    {/*오른쪽중에 _ 왼쪽*/}
                    <div className="w-1/2 h-full  flex flex-col items-center xl:pt-10">
                        {/* 1 */}
                        <div className="w-[80%] h-[28%] p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/gd2d15e92f3fd55593acf2fe3aecce107bb4d4e59fc20e3eaa11550e0e900103b6d94d00e22f5958b78c19067b7171a2b.jpg')] bg-cover bg-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet eos sunt vitae ipsa
                            ad? Molestias, iure assumenda! Porro,
                        </div>
                        <h2>사진 제목</h2>
                        {/* 2 */}
                        <div className="w-[80%] h-[28%] p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/gd2d15e92f3fd55593acf2fe3aecce107bb4d4e59fc20e3eaa11550e0e900103b6d94d00e22f5958b78c19067b7171a2b.jpg')] bg-cover bg-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet eos sunt vitae ipsa
                            ad? Molestias, iure assumenda! Porro,
                        </div>
                        <h2>사진 제목</h2>
                        {/* 3 */}
                        <div className="w-[80%] h-[28%] p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/gd2d15e92f3fd55593acf2fe3aecce107bb4d4e59fc20e3eaa11550e0e900103b6d94d00e22f5958b78c19067b7171a2b.jpg')] bg-cover bg-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet eos sunt vitae ipsa
                            ad? Molestias, iure assumenda! Porro,
                        </div>
                        <h2>사진 제목</h2>
                    </div>
                    {/*오른쪽중에 _ 오른쪽*/}
                    <div className="w-1/2 h-full  flex flex-col items-center xl:pt-[100px]">
                        {/* 1 */}
                        <div className="w-[80%] h-[30%] p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/gd2d15e92f3fd55593acf2fe3aecce107bb4d4e59fc20e3eaa11550e0e900103b6d94d00e22f5958b78c19067b7171a2b.jpg')] bg-cover bg-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet eos sunt vitae ipsa
                            ad? Molestias, iure assumenda! Porro,
                        </div>
                        <h2>사진 제목</h2>
                        {/* 2 */}
                        <div className="w-[80%] h-[30%] p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/gd2d15e92f3fd55593acf2fe3aecce107bb4d4e59fc20e3eaa11550e0e900103b6d94d00e22f5958b78c19067b7171a2b.jpg')] bg-cover bg-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet eos sunt vitae ipsa
                            ad? Molestias, iure assumenda! Porro,
                        </div>
                        <h2>사진 제목</h2>
                        {/* 3 */}
                        <div className="w-[80%] h-[30%] p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/gd2d15e92f3fd55593acf2fe3aecce107bb4d4e59fc20e3eaa11550e0e900103b6d94d00e22f5958b78c19067b7171a2b.jpg')] bg-cover bg-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet eos sunt vitae ipsa
                            ad? Molestias, iure assumenda! Porro,
                        </div>
                        <h2>사진 제목</h2>
                    </div>
                </div>
            </section>
            {/* 준비하고 떠나는 여행TIP */}
            <section className="w-full h-screen flex justify-center">
                <div className="w-full h-full  p-12 max-w-[1300px]">
                    {/* TITLE */}
                    <div className="w-full flex flex-col items-center mt-16 mb-16">
                        <h2 className="flex items-center">
                            준비하고 떠나는 <br />
                            <span className="text-[#ef6d00] font-bold">여행TIP</span>{' '}
                            <HiOutlineLightBulb className=" inline-block" />
                        </h2>
                        <p className="mt-2">알고가면 더 재미있는 제주도 여행 정보</p>
                    </div>
                    {/* 이미지 통괄  */}
                    <div className="flex justify-between xl:mb-32 mb-[500px] relative lg:mb-[650px]">
                        {/* 왼쪽 이미지 */}
                        <div className="xl:w-[30%] mr-4">
                            <div className="w-full bg-gray-700 flex flex-col items-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/b0e8/46cd/a0b30377f65303f4052d53b9405db70a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKE89tFBPTXsQ6A1gSSZB~CrihDA7GBXh8TncSWP6~M3~WVel6GXjfXUq1YuH1CUp6IIb5kbWbfOF9jx7Gi7kEMdrt28ebkVwj6K-RvaY1KUcDcZZz6qBha9HC3RbJBGZrXpVQrKixvSualtKBaJquNWrERohBdqaQJ0M5ubFeMtqbq60SQx7-1D1qPMv5LPgjAa0VE1K3LyqBmRDuSH3wtoeNVOu2MAXSndAuugbDLvryVJfoh-CyPakyUwH2j6ajZUsQA52Qqyfd~clqgE1lYIQ0W9pABLDD7ZGv4HxGryusyhUDD08mZA8cDmR-j6i1VIxHWHlPCTSF1Dth0oUQ__"
                                    alt=""
                                />
                            </div>
                            <div className="text-center">
                                <p>실시간</p>
                                <p>혼잡도 서비스</p>
                            </div>
                        </div>
                        {/* 중간 캐러셀 */}
                        <div className="xl:w-[30%] w-[50%] xl:relative h-[400px] xl:bottom-0 xl:left-0 xl:translate-x-0 absolute -bottom-[450px] left-1/2 transform -translate-x-1/2 mt-20">
                            <Carousel id="Carousel">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://s3-alpha-sig.figma.com/img/1d0b/33e2/0ac7d18c60878918108e1d8ae5ab7c46?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inhBdxTSY37wZqayEkx2Euq-BiVQaNogCdngpZvMQJgmPGMDLMsNl8ShPK~vZKaKbhVKltCV7wdx1t1b9mK8Z4LcJCVFssXn~j8h5EUFErgWPMtseAUQsAg0PEx1dvog2ypH5il9STMbKZ9lht-alxNg8U6Lkl907e3VDwjdy3TbP1S2HsIjEq2nEqZ1n1LP8tDw~8I3OrENwQF8LpHbukPIE3tfJwB0OU7rBH0zocCUNhpEcMRYQGrBOGr6H38518yQxkhxUwtqWpxKwtxqMFDQs3PylDBVlAgmRv-ytFTxDSbV8DXTrn6mIi-K0EYPYZucIjst29R12aoQhKgJVA__"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://s3-alpha-sig.figma.com/img/1d0b/33e2/0ac7d18c60878918108e1d8ae5ab7c46?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inhBdxTSY37wZqayEkx2Euq-BiVQaNogCdngpZvMQJgmPGMDLMsNl8ShPK~vZKaKbhVKltCV7wdx1t1b9mK8Z4LcJCVFssXn~j8h5EUFErgWPMtseAUQsAg0PEx1dvog2ypH5il9STMbKZ9lht-alxNg8U6Lkl907e3VDwjdy3TbP1S2HsIjEq2nEqZ1n1LP8tDw~8I3OrENwQF8LpHbukPIE3tfJwB0OU7rBH0zocCUNhpEcMRYQGrBOGr6H38518yQxkhxUwtqWpxKwtxqMFDQs3PylDBVlAgmRv-ytFTxDSbV8DXTrn6mIi-K0EYPYZucIjst29R12aoQhKgJVA__"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://s3-alpha-sig.figma.com/img/1d0b/33e2/0ac7d18c60878918108e1d8ae5ab7c46?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inhBdxTSY37wZqayEkx2Euq-BiVQaNogCdngpZvMQJgmPGMDLMsNl8ShPK~vZKaKbhVKltCV7wdx1t1b9mK8Z4LcJCVFssXn~j8h5EUFErgWPMtseAUQsAg0PEx1dvog2ypH5il9STMbKZ9lht-alxNg8U6Lkl907e3VDwjdy3TbP1S2HsIjEq2nEqZ1n1LP8tDw~8I3OrENwQF8LpHbukPIE3tfJwB0OU7rBH0zocCUNhpEcMRYQGrBOGr6H38518yQxkhxUwtqWpxKwtxqMFDQs3PylDBVlAgmRv-ytFTxDSbV8DXTrn6mIi-K0EYPYZucIjst29R12aoQhKgJVA__"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        {/* 오른쪽 이미지 */}
                        <div className="xl:w-[30%]">
                            <div className="w-full bg-gray-700 flex flex-col items-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/7c7c/c52f/f84e277d544bb8000a691b831398a0b9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6uF1AfNQEPt85AyyrnshnQb6HRqvn0KGwugygCJoP8JMpEMlvaQUm86bvKcYsF7OxAGTvzDgU2jHnckmjRft9NdyRZQ37ceI184NppqQ-7Xv1HE3eLp8jlFUKT6qK7IuHp2n4oPDdNH0lER9iGCKojabT6rLcllRHeUFGtTQnFdHoseqYQLuY86EcYhDszkTAFkH4Ii8eEUbulL6WAPlwM-9fZz6YMqvzknvL4HMYjUN7jRFtXHqjOMDMs4N6dFXVu69OOL-RaJIOw-qBBfTLeooFjzd8ZcmR--0eUSrxsuwOiSl88NhPQC5xs1yyFuQWcOzeagjyX5GXyOpDodcw__"
                                    alt=""
                                />
                            </div>
                            <div className="text-center">
                                <p>안전여행 스탬프</p>
                                <p>신청하기</p>
                            </div>
                        </div>
                    </div>
                    {/* 아래쪽 컨텐츠 */}
                    <div className="w-full h-[120px] border border-gray-800 rounded-lg flex justify-around items-center px-16">
                        <div className="xl:text-[24px] flex items-center">
                            <img src={minilogo1} alt="" className="w-8 mr-2" />
                            <span>면세 쇼핑몰</span>
                        </div>
                        <div className="w-[1px] h-16 bg-gray-500"></div>
                        <div className="xl:text-[24px] flex items-center">
                            <img src={minilogo2} alt="" className="w-8 mr-2" /> <span>여행플랫폼</span>
                        </div>
                        <div className="w-[1px] h-16 bg-gray-500"></div>
                        <div className="xl:text-[24px] flex items-center">
                            <img src={minilogo3} alt="" className="w-8 mr-2" />
                            <span>E jeju</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* 제주도 인스타그램 */}
            <section className="w-full h-auto flex justify-center relative mb-32">
                <img id="hidden_img" src={Chat} alt="" className=" absolute -bottom-8 right-[8vw] w-40 hidden" />

                <div className="w-full max-w-[1300px] h-full p-4 overflow-hidden">
                    {/* TITLE */}
                    <div className="w-full flex items-center mt-16 flex-col">
                        <h2 className="mb-16 flex items-center">
                            제주도 <span className="text-[#ef6d00] font-bold">인스타그램</span>
                            <FaInstagram className=" inline-block" />
                        </h2>
                        {/* Grid Instagram */}
                        <div className="w-full h-full flex justify-center">
                            <div
                                id="Main_Grid"
                                className="w-full h-full text-white grid xl:grid-cols-4 grid-rows-2 gap-4"
                            >
                                <div className="flex justify-center items-center">
                                    <img
                                        src={Harbang}
                                        alt="empty"
                                        className="w-full h-[680px] object-cover object-center"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={Harbang}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={Harbang}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center "
                                    />
                                </div>
                                <div className=" flex justify-center items-center ">
                                    <img
                                        src={Harbang}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center"
                                    />
                                </div>
                                <div className=" flex justify-center items-center  ">
                                    <img
                                        src={Harbang}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 푸터 */}
            <footer className="w-full xl:h-[120px] bg-[#FFF2E5] xl:flex justify-between">
                {/* 푸터 왼쪽 */}
                <div className="xl:w-1/2 xl:ml-16 ml-8 h-full flex flex-col xl:justify-center">
                    <div>
                        <h2>API</h2>
                    </div>
                    <div className="flex xl:space-x-6 space-x-16 font-bold  mr-8">
                        <p>Instagram API</p>
                        <p>Visitjeju Tour API</p>
                        <p>Weather API</p>
                    </div>
                </div>
                {/* 푸터 오른쪽 */}
                <div className="xl:w-1/2 w-[200px] flex justify-between xl:justify-end space-x-16 xl:space-x-0  items-center xl:mr-16 ml-8 mt-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/6bf0/5ce2/f84a210f5c24628860b69e4ccb51a023?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5-RKxPRXRAdPlg~6Q-s1SVplxTGi5zgqIGA8vT7N~eH57VPu2fOlMnl71V7pd~lWeuVWmzDpTQAs5852ywsUxyP8sLtMG5lW2E8wJzLYJFGQ91VAhYp~weO-3tjKmtCLv8Uc-y~uevAIyDloELzLqSrzrpU8lJmbtnyOgDQszfjbKRHi1EC4CWNNRSB6RL51A1g~-TkW64v9o5NGX0XzDrH~1kGaM0deH~3iTIrF4nirQcWZMPxsyz9azuB2rMueuy88WGndIFyvMiq6ZXu8XDPjApy~Nbd3EhyatTZbLKOFeh40xEhKfFnpfort9w6k2A745JsXOtSM7YD-9FMrg__"
                        alt=""
                    />
                    <img className="xl:h-[60%]" src={FooterLogo} alt="" />
                </div>
            </footer>
        </>
    );
}

export default App;
