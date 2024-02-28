import foot1 from "../image/foot1.png";
import foot2 from "../image/foot2.svg";

export default function Footer() {
  return (
    <>
      <footer className="w-full xl:min-h-[130px] bg-[#FFF2E5] xl:flex justify-between pt-4">
        {/* 푸터 왼쪽 */}
        <div className="xl:w-1/2 xl:ml-16 ml-8 h-full flex flex-col xl:justify-center text-[#666]">
          <div className="mb-2">
            <h2 className="text-3xl font-bold uppercase">site map</h2>
          </div>
          <div id="footMap" className="flex flex-wrap xl:gap-x-6 gap-x-16 gap-y-1 font-semibold mr-8 text-xl">
            <a href="#travle">
              <p>여행 TIP</p>
            </a>
            <a href="#now">
              <p>관광지</p>
            </a>
            <a href="#sns">
              <p>인스타그램</p>
            </a>
            <a href="#kakaoMap">
              <p>지도</p>
            </a>
          </div>
        </div>
        {/* 푸터 오른쪽 */}
        <div className="xl:w-1/2 min-w-[200px] flex flex-wrap xl:justify-end gap-x-1 pt-10 xl:pt-2 items-start xl:mr-16 ml-8">
          <img src={foot1} alt="img" />
          <img className="xl:h-[60%] w-[200px]" src={foot2} alt="img" />
        </div>
      </footer>
    </>
  );
}
