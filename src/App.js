import Video from "./video/Headervideo.mp4";
import logo from "./image/logo.png";
import FooterLogo from "./image/footerlogo.jpg";
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
      <section className="w-full h-[200vh] flex bg-[url('https://pixabay.com/get/g2a43aa6a2ed33fc2688727029b78eab8fa02b729b13c973ae0c5e6255f1bf57e78f69dfedb93066da43dea923356ebda.jpg')] bg-cover bg-center">
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
            <div className="w-[80%] h-[28%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/g2ba10f6aa0f6e081eb27e5fe2a04ed92ea56c4756166b7488310161e2bbace9dd5e5a216ef08edf194888b94ab6c3b6e.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
            {/* 2 */}
            <div className="w-[80%] h-[28%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/g2ba10f6aa0f6e081eb27e5fe2a04ed92ea56c4756166b7488310161e2bbace9dd5e5a216ef08edf194888b94ab6c3b6e.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
            {/* 3 */}
            <div className="w-[80%] h-[28%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/g2ba10f6aa0f6e081eb27e5fe2a04ed92ea56c4756166b7488310161e2bbace9dd5e5a216ef08edf194888b94ab6c3b6e.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
          </div>
          {/*오른쪽중에 _ 오른쪽*/}
          <div className="w-1/2 h-full  flex flex-col items-center pt-[100px]">
            {/* 1 */}
            <div className="w-[80%] h-[30%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/g2ba10f6aa0f6e081eb27e5fe2a04ed92ea56c4756166b7488310161e2bbace9dd5e5a216ef08edf194888b94ab6c3b6e.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
            {/* 2 */}
            <div className="w-[80%] h-[30%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/g2ba10f6aa0f6e081eb27e5fe2a04ed92ea56c4756166b7488310161e2bbace9dd5e5a216ef08edf194888b94ab6c3b6e.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
            {/* 3 */}
            <div className="w-[80%] h-[30%] p-5 pt-20 mt-10 bg-[url('https://pixabay.com/get/g2ba10f6aa0f6e081eb27e5fe2a04ed92ea56c4756166b7488310161e2bbace9dd5e5a216ef08edf194888b94ab6c3b6e.jpg')] bg-cover bg-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              amet eos sunt vitae ipsa ad? Molestias, iure assumenda! Porro,
            </div>
            <h2>사진 제목</h2>
          </div>
        </div>
      </section>
      {/* 준비하고 떠나는 여행TIP */}
      <section className="w-full h-screen flex justify-center">
        <div className="w-full max-w-[1300px] h-full bg-slate-500 ">
          {/* TITLE */}
          <div className="w-full flex justify-center mt-16">
            <h2>
              준비하고 떠나는 <span className="text-[#ef6d00]">여행TIP</span>
            </h2>
          </div>
        </div>
      </section>
      {/* 제주도 인스타그램 */}
      <section className="w-full h-screen flex justify-center">
        <div className="w-full max-w-[1300px] h-full bg-slate-600 ">
          {/* TITLE */}
          <div className="w-full flex items-center mt-16 flex-col">
            <h2>
              제주도 <span className="text-[#ef6d00]">인스타그램</span>
            </h2>
            {/* Grid Instagram */}
            <div className="w-full h-full flex justify-center">
              <div
                id="Main_Grid"
                className="w-[80%] h-full text-white grid grid-cols-4 grid-rows-2 gap-4"
              >
                <div className="flex justify-center items-center">
                  <img
                    src="https://pixabay.com/get/gb44d445a2cd2f2c9dd7c58933ec0d27bcee87f8a573ab792d51e9932ec27a5d0eaf56b1d4bea55f8b54640b76bc00849.jpg"
                    alt="empty"
                    className="w-full h-[520px] object-cover"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://pixabay.com/get/gb44d445a2cd2f2c9dd7c58933ec0d27bcee87f8a573ab792d51e9932ec27a5d0eaf56b1d4bea55f8b54640b76bc00849.jpg"
                    alt="empty"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://pixabay.com/get/gb44d445a2cd2f2c9dd7c58933ec0d27bcee87f8a573ab792d51e9932ec27a5d0eaf56b1d4bea55f8b54640b76bc00849.jpg"
                    alt="empty"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className=" flex justify-center items-center ">
                  <img
                    src="https://pixabay.com/get/g946daf2725040be8c0745a2a6f59e81263a5fbbdaab676ec0c7dc94d1587b0cade13be95167202e9f9602fed655dfea0.jpg"
                    alt="empty"
                    className="w-full h-[250px]"
                  />
                </div>
                <div className=" flex justify-center items-center ">
                  <img
                    src="https://pixabay.com/get/g946daf2725040be8c0745a2a6f59e81263a5fbbdaab676ec0c7dc94d1587b0cade13be95167202e9f9602fed655dfea0.jpg"
                    alt="empty"
                    className="w-full h-[250px]"
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
