import { useQuery } from "react-query";
import { jeju } from "../Api";

export default function NowTaday() {
  const { data, isLoading } = useQuery("관광지사진", jeju);
  const limitedData = data ? data.items.slice(60, 64) : [];
  const limitedData2 = data ? data.items.slice(78, 82) : [];

  return (
    <>
      <section className="w-full  h-[190vh] xl:h-[270vh]  xl:flex-row pb-16 bg-[url('./image/bg.jpg')] bg-cover bg-center bg-fixed flex flex-col xl:items-start items-center ">
        {/* 왼쪽 공간 */}
        <div className="w-1/3  xl:h-screen flex flex-col justify-center items-center  mx-auto xl:ml-20  xl:sticky xl:top-0  ">
          {/* 주황색 제목 */}
          <div className="w-[500px] text-center md:text-left xl:ml-32 overflow-hidden  ">
            <div className="mb-4 mt-16 ">
              <h2 className="font-bold xl:text-7xl text-6xl  text-[#EF6D00] ">지금 제주도!</h2>
              <h2 className="font-bold xl:text-7xl text-6xl text-[#EF6D00]">여기 어때요?</h2>
            </div>
            {/* 아래 텍스트 */}
            <div className="text-[20px] text-white ">
              <p className="">웅대한 자연과 다양한 볼거리로 가득한 곳, 전통을 지키고 발전시키는 제주도의 특별한 여행지들을 소개합니다.</p>
            </div>
          </div>
        </div>
        {/* 오른쪽 공간 */}
        <div className="w-2/3 h-full flex xl:ml-16 space-x-4">
          {/*오른쪽중에 _ 왼쪽*/}
          <div className="w-1/2 h-full flex flex-col items-center xl:pt-10 overflow-hidden">
            {/* 1 */}
            <div className=" relative w-full xl:w-[80%] h-[300px]  ">
              {limitedData.map((item, index) => (
                <div key={index}>
                  <div
                    className={`w-full xl:w-[80%] relative h-[230px] xl:h-[350px] overflow-hidden hover:text-white group p-5 pt-20 mt-12 mb-3 xl:mt-32 shadow-lg  `}
                    style={{
                      backgroundImage: `url('${item?.repPhoto?.photoid?.thumbnailpath}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="h-[50%] xl:h-[30%]  text-[12px] sm:text-[15px] p-4 bg-black/50 backdrop-blur-sm absolute bottom-0 left-0 right-0 overflow-hidden translate-y-full group-hover:translate-y-0 duration-500 ">{item.introduction}</div>
                  </div>
                  <div className="text-center w-full xl:w-[80%]">
                    <h2 className="xl:text-2xl text-xl truncate overflow-hidden whitespace-nowrap text-white ">{item.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*오른쪽중에_오른쪽*/}
          <div className="w-1/2 h-full flex flex-col items-center xl:pt-[100px] overflow-hidden  ">
            {/* 1 */}
            <div className=" relative w-full xl:w-[80%] h-[300px] ">
              {limitedData2.map((item, index) => (
                <div key={index}>
                  <div
                    className={`w-full xl:w-[80%] relative h-[230px] xl:h-[350px] overflow-hidden hover:text-white group p-5 pt-20 mt-12 mb-3 xl:mt-40 shadow-lg `}
                    style={{
                      backgroundImage: `url('${item?.repPhoto?.photoid?.thumbnailpath}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="h-[50%] xl:h-[30%] text-[12px] sm:text-[15px] p-4 bg-black/50 backdrop-blur-sm absolute bottom-0 left-0 right-0 overflow-hidden translate-y-full group-hover:translate-y-0 duration-500">{item.introduction}</div>
                  </div>
                  <div className=" w-full xl:w-[80%]  text-center">
                    <h2 className="xl:text-2xl text-xl truncate overflow-hidden whitespace-nowrap text-white ">{item.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
