export default function NowTaday() {
    return (
        <>
            <section className="w-full xl:h-[200vh] xl:flex-row pb-16 bg-[url('./image/bg.jpg')] bg-cover bg-center bg-fixed flex flex-col items-center ">
                {/* 왼쪽 공간 */}
                <div className="w-1/3 h-2/3 flex flex-col justify-center items-center  mx-auto xl:ml-20">
                    {/* 주황색 제목 */}
                    <div className="w-[500px] text-center md:text-left xl:ml-32 overflow-hidden ">
                        <div className="mb-4 mt-16 ">
                            <h2 className="font-bold xl:text-7xl text-6xl  text-[#EF6D00] ">지금 제주도!</h2>
                            <h2 className="font-bold xl:text-7xl text-6xl text-[#EF6D00]">여기 어때요?</h2>
                        </div>
                        {/* 아래 텍스트 */}
                        <div className="text-[20px] text-white ">
                            <p className="">
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
                            <p class="photo-container text-white  ">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet eos sunt vitae
                                ipsa ad? Molestias, iure assumenda! Porro,
                            </p>
                        </div>
                        <h2>사진 제목</h2>
                        {/* 2 */}
                        <div className="z-10 w-[80%] hover:text-red-500 h-[28%]  p-5 pt-20 mt-10 shadow-lg bg-[url('https://pixabay.com/get/gd2d15e92f3fd55593acf2fe3aecce107bb4d4e59fc20e3eaa11550e0e900103b6d94d00e22f5958b78c19067b7171a2b.jpg')] bg-cover bg-center">
                            <span className=" z-20 text-white cursor-pointer hover:text-red">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam amet eos sunt vitae
                                ipsa ad? Molestias, iure assumenda! Porro,
                            </span>
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
        </>
    );
}
