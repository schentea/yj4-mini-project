import Video from './video/Headervideo.mp4';
import logo from './image/logo.png';
function App() {
    return (
        <>
            {/* 헤더 */}
            <header className="w-full h-[80px] relative">
                <div className="w-full h-full flex justify-between px-16">
                    {/* 로고 */}
                    <img src={logo} alt="" />
                    {/* 날씨 */}
                    <div className="w-20 h-full bg-black"></div>
                    {/* GNB 메뉴 */}
                    <div className="bg-gray-500 flex space-x-12 text-white items-center">
                        <p>관광지</p>
                        <p>여행 TIP</p>
                        <p>SNS</p>
                    </div>
                </div>
                {/* 메인 동영상 */}
                <div className="w-full h-[screen] overflow-hidden">
                    <div className="w-full h-full absolute top-0 left-0 -z-10">
                        <video muted autoPlay loop className="w-full h-[100vh] object-cover object-center">
                            <source src={Video} type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/* 메인 동영상 내용 */}
                <div className=" absolute top-[500%] left-[50px]">
                    <h4 className="text-[30px]">자연이 숨쉬는 곳 </h4>
                    <h2 className="text-[55px]">빛나는 제주</h2>
                </div>
            </header>
        </>
    );
}

export default App;
