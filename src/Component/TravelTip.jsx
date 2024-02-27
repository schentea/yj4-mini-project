import minilogo1 from '../image/minilogo1.jpg';
import minilogo2 from '../image/minilogo2.jpg';
import minilogo3 from '../image/minilogo3.jpg';
import { Carousel } from 'react-bootstrap';
import { HiOutlineLightBulb } from 'react-icons/hi';

export default function TravelTip() {
    return (
        <>
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
        </>
    );
}