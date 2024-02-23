import Video from "./video/Headervideo.mp4";
import logo from "./image/logo.png";
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
    </>
  );
}

export default App;
