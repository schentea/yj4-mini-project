import foot1 from "../image/foot1.png";
import foot2 from "../image/foot2.svg";

export default function Footer() {
  return (
    <>
      <footer className="w-100vw xl:min-h-[130px] bg-[#FFF2E5] xl:flex justify-between py-4 pl-4">
        {/* 푸터 왼쪽 */}
        <div className="w-full xl:w-1/2">
          <div className="w-full mb-2 flex flex-col text-[#666]">
            <div className="mb-2">
              <h2 className="text-2xl font-semibold uppercase">site map</h2>
            </div>
            <div id="footMap" className="flex flex-wrap xl:gap-x-6 gap-x-16 gap-y-1 mr-8 text-xl">
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
          <div className="text-sm">
            <p>(63122) 제주특별자치도 제주시 선덕로 23(연동) 제주웰컴센터</p>
            <p>관광문의 : 제주관광공사Tel : 064-740-6000~1FAX : 064-740-6090사업자등록번호 : 616-82-21432</p>
            <p>관광불편신고 : 제주 120만덕콜센터(064-120번)</p>
          </div>
        </div>
        {/* 푸터 오른쪽 */}
        <div className="xl:w-1/2 min-w-[200px] flex flex-wrap xl:justify-end items-center gap-x-4 pt-10 xl:pt-2 xl:mr-16 ml-8">
          <img src={foot1} alt="img" />
          <img className="xl:h-[60%] w-[200px]" src={foot2} alt="img" />
        </div>
      </footer>
    </>
  );
}
