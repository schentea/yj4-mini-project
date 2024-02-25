import Video from "./video/Headervideo.mp4";
import logo from "./image/logo.png";
import FooterLogo from "./image/footerlogo.jpg";
import Chat from "./image/chat.jpg";
import React from "react";
import { Carousel } from "react-bootstrap";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import minilogo1 from "./image/minilogo1.jpg";
import minilogo2 from "./image/minilogo2.jpg";
import minilogo3 from "./image/minilogo3.jpg";
function App() {
  return (
    <>
      {/* 헤더 */}
      <header className="w-full h-[100vh] relative">
        {/* 동영상 배경 */}
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
        {/* 메인 동영상 내용 */}
        <div className="absolute top-[50%] left-[10%] transform translate(-50%, -50%) text-white z-10">
          <h2 className="mb-5 ">자연이 숨쉬는 곳</h2>
          <h1 className=" ">빛나는 제주</h1>
        </div>
        {/* 로고와 메뉴 */}
        <div className="absolute inset-x-0 top-0 flex justify-between items-center px-6 xl:px-16 h-[80px] xl:h-[120px]">
          {/* 로고 */}
          <img src={logo} alt="로고" className="h-[50px] xl:h-full" />
          {/* 메뉴 */}
          <nav className="flex space-x-12 xl:space-x-32 text-white text-lg xl:text-3xl">
            <div className="flex items-center">
              <div className="w-20 h-12 flex justify-center items-center rounded-full">
                <p>날씨</p>
              </div>
            </div>
            <p>관광지</p>
            <p>여행 TIP</p>
            <p>SNS</p>
          </nav>
        </div>
      </header>
      {/* 지금 제주도! 여기어떄요? */}
      <section className="w-full h-[200vh] flex bg-[url('https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg')] bg-cover bg-center">
        {/* 왼쪽 공간 */}
        <div className="w-1/3 h-2/3 flex flex-col justify-center ml-20">
          {/* 주황색 제목 */}
          <div>
            <div className="mb-4">
              <h2 className="font-bold text-6xl text-[#EF6D00]">
                지금 제주도!
              </h2>
              <h2 className="font-bold text-6xl text-[#EF6D00]">
                여기 어때요?
              </h2>
            </div>
            {/* 아래 텍스트 */}
            <div className="text-[20px]">
              <p>웅대한 자연과 다양한 볼거리로 가득한 곳,</p>
              <p>전통을 지키고 발전시키는 제주도의 </p>
              <p>특별한 여행지들을 소개합니다.</p>
            </div>
          </div>
        </div>
        {/* 오른쪽 공간 */}
        <div className="w-2/3 h-full flex ">
          {/*오른쪽중에 _ 왼쪽*/}
          <div className="w-1/2 h-full  flex flex-col items-center pt-10">
            {/* 1 */}
            <div className="w-[80%] h-[28%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
            {/* 2 */}
            <div className="w-[80%] h-[28%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
            {/* 3 */}
            <div className="w-[80%] h-[28%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
          </div>
          {/*오른쪽중에 _ 오른쪽*/}
          <div className="w-1/2 h-full  flex flex-col items-center pt-[100px]">
            {/* 1 */}
            <div className="w-[80%] h-[30%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
            {/* 2 */}
            <div className="w-[80%] h-[30%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
            {/* 3 */}
            <div className="w-[80%] h-[30%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
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
              준비하고 떠나는{" "}
              <span className="text-[#ef6d00] font-bold">여행TIP</span>{" "}
              <HiOutlineLightBulb className=" inline-block" />
            </h2>
            <p className="mt-2">알고가면 더 재미있는 제주도 여행 정보</p>
          </div>
          {/* 이미지 통괄  */}
          <div className="flex justify-between mb-36">
            {/* 왼쪽 이미지 */}
            <div className="w-[30%]">
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
            <div className="w-[30%] mt-20">
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
            <div className="w-[30%]">
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
            <div className="text-[24px] flex items-center">
              <img src={minilogo1} alt="" className="w-8 mr-2" />
              <span>면세 쇼핑몰</span>
            </div>
            <div className="w-[1px] h-16 bg-gray-500"></div>
            <div className="text-[24px] flex items-center">
              <img src={minilogo2} alt="" className="w-8 mr-2" />{" "}
              <span>여행플랫폼</span>
            </div>
            <div className="w-[1px] h-16 bg-gray-500"></div>
            <div className="text-[24px] flex items-center">
              <img src={minilogo3} alt="" className="w-8 mr-2" />
              <span>E jeju</span>
            </div>
          </div>
        </div>
      </section>
      {/* 제주도 인스타그램 */}
      <section className="w-full h-auto flex justify-center relative mb-32">
        <img
          id="hidden_img"
          src={Chat}
          alt=""
          className=" absolute -bottom-8 right-[8vw] w-40 hidden"
        />

        <div className="w-full max-w-[1300px] h-full p-4 overflow-hidden">
          {/* TITLE */}
          <div className="w-full flex items-center mt-16 flex-col">
            <h2 className="mb-16 flex items-center">
              제주도{" "}
              <span className="text-[#ef6d00] font-bold">인스타그램</span>
              <FaInstagram className=" inline-block" />
            </h2>
            {/* Grid Instagram */}
            <div className="w-full h-full flex justify-center">
              <div
                id="Main_Grid"
                className="w-full h-full text-white grid grid-cols-4 grid-rows-2 gap-4"
              >
                <div className="flex justify-center items-center">
                  <img
                    src="https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg"
                    alt="empty"
                    className="w-full h-[680px] object-cover object-center"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg"
                    alt="empty"
                    className="w-full h-[330px] object-cover object-center"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg"
                    alt="empty"
                    className="w-full h-[330px] object-cover object-center "
                  />
                </div>
                <div className=" flex justify-center items-center ">
                  <img
                    src="https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg"
                    alt="empty"
                    className="w-full h-[330px] object-cover object-center"
                  />
                </div>
                <div className=" flex justify-center items-center  ">
                  <img
                    src="https://pixabay.com/get/ge01c1ef1d9e498fc8962c65f0299eda6701cd007c78ccd7b9809fe4f51b2cb1fbfa0ec1fe76f8fc93fc93a66d2bdd7d0.jpg"
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
      <footer className="w-full h-[120px] bg-[#FFF2E5] flex justify-between">
        {/* 푸터 왼쪽 */}
        <div className="w-1/2 ml-16 h-full flex flex-col justify-center">
          <div>
            <h2>API</h2>
          </div>
          <div className="flex space-x-6 font-bold">
            <p>Instagram API</p>
            <p>Visitjeju Tour API</p>
            <p>Weather API</p>
          </div>
        </div>
        {/* 푸터 오른쪽 */}
        <div className="w-1/2 flex justify-end items-center mr-16">
          <img
            src="https://s3-alpha-sig.figma.com/img/6bf0/5ce2/f84a210f5c24628860b69e4ccb51a023?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5-RKxPRXRAdPlg~6Q-s1SVplxTGi5zgqIGA8vT7N~eH57VPu2fOlMnl71V7pd~lWeuVWmzDpTQAs5852ywsUxyP8sLtMG5lW2E8wJzLYJFGQ91VAhYp~weO-3tjKmtCLv8Uc-y~uevAIyDloELzLqSrzrpU8lJmbtnyOgDQszfjbKRHi1EC4CWNNRSB6RL51A1g~-TkW64v9o5NGX0XzDrH~1kGaM0deH~3iTIrF4nirQcWZMPxsyz9azuB2rMueuy88WGndIFyvMiq6ZXu8XDPjApy~Nbd3EhyatTZbLKOFeh40xEhKfFnpfort9w6k2A745JsXOtSM7YD-9FMrg__"
            alt=""
          />
          <img className="h-[60%]" src={FooterLogo} alt="" />
        </div>
      </footer>
    </>
  );
}

export default App;
