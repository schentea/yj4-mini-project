import { useQuery } from "react-query";
import { jeju } from "../Api";

export default function NowTaday() {
  const { data, isLoading } = useQuery("관광지사진", jeju);
  const limitedData = data ? data.items.slice(0, 8) : [];

  console.log(limitedData);
  return (
    <>
      <section className="w-full xl:h-[200vh] xl:flex-row pb-16 bg-[url('./image/bg.jpg')] bg-cover bg-center bg-fixed flex flex-col items-center ">
        {/* 왼쪽 공간 */}
        <div className="w-1/3 h-2/3 flex flex-col justify-center items-center mx-auto xl:ml-20">
          {/* 주황색 제목 */}
          <div className="sm:w-[500px] w-[375px] text-center md:text-left xl:ml-32 overflow-hidden ">
            <div className="mb-4 mt-16 ">
              <h2 className="font-bold xl:text-7xl sm:text-6xl text-4xl text-[#EF6D00] ">지금 제주도!</h2>
              <h2 className="font-bold xl:text-7xl sm:text-6xl text-4xl text-[#EF6D00]">여기 어때요?</h2>
            </div>
            {/* 아래 텍스트 */}
            <div className="text-[20px] text-white ">
              <p className="">웅대한 자연과 다양한 볼거리로 가득한 곳, 전통을 지키고 발전시키는 제주도의 특별한 여행지들을 소개합니다.</p>
            </div>
          </div>
        </div>
        {/* 오른쪽 공간 */}
        <div className="w-2/3 h-full flex xl:ml-16 ">
          {/*오른쪽중에 _ 왼쪽*/}
          <div className="w-1/2 h-full flex flex-col items-center xl:pt-10 overflow-hidden">
            {/* 1 */}
            <div className=" relative w-[80%] h-[300px]">
              {limitedData.map((item, index) => (
                <>
                  <div
                    className={`w-[100%] relative h-[280px] xl:h-[570px] overflow-hidden hover:text-white group p-5 pt-20 mt-10 shadow-lg`}
                    style={{
                      backgroundImage: `url('${item?.repPhoto?.photoid?.thumbnailpath}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div class="h-[50%] p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 overflow-hidden translate-y-full group-hover:translate-y-0 duration-500">{item.introduction}</div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-3xl">{item.title}</h2>
                  </div>
                </>
              ))}
            </div>
          </div>
          {/*오른쪽중에 _ 오른쪽*/}
          <div className="w-1/2 h-full  flex flex-col items-center xl:pt-[100px]">
            {/* 1 */}
            <div className="w-[80%] relative h-[280px] xl:h-[570px] overflow-hidden hover:text-white group p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/g57a76fc9e9884cd03af6c1ffed7f2059fd0ab5ba79b96b63be6c0d245ef34a7854584166974355bdc7934180c0b8c098.jpg')] bg-cover bg-center">
              <div class="h-[50%] p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 overflow-hidden translate-y-full group-hover:translate-y-0 duration-500">Lorem ipsum dolor,sit amet consectetur adipisicing elit.</div>
            </div>
            <h2>사진 제목</h2>
            {/* 2 */}
            <div className="w-[80%] relative h-[280px] xl:h-[570px] overflow-hidden hover:text-white group p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/g57a76fc9e9884cd03af6c1ffed7f2059fd0ab5ba79b96b63be6c0d245ef34a7854584166974355bdc7934180c0b8c098.jpg')] bg-cover bg-center">
              <div className="h-[50%] p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 overflow-hidden translate-y-full group-hover:translate-y-0 duration-500">Lorem ipsum dolor,sit amet consectetur adipisicing elit.</div>
            </div>
            <h2>사진 제목</h2>
            {/* 3 */}
            <div className="w-[80%] relative h-[280px] xl:h-[570px] overflow-hidden hover:text-white group p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/g57a76fc9e9884cd03af6c1ffed7f2059fd0ab5ba79b96b63be6c0d245ef34a7854584166974355bdc7934180c0b8c098.jpg')] bg-cover bg-center">
              <div className="h-[50%] p-4 bg-black bg-opacity-50 absolute bottom-0 left-0 right-0 overflow-hidden translate-y-full group-hover:translate-y-0 duration-500">Lorem ipsum dolor,sit amet consectetur adipisicing elit.</div>
            </div>
            <h2>사진 제목</h2>
          </div>
        </div>
      </section>
    </>
  );
}
