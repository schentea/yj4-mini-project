import { FaInstagram } from 'react-icons/fa6';

import { useQuery } from 'react-query';
import { insta } from '../Api';
export default function JejuInstagram() {
    const { data } = useQuery('insta', insta);
    console.log(data);
    return (
        <>
            <section className="w-full h-auto flex justify-center relative mb-32 mt-48 lg:mt-96 xl:mt-0">
                <div className="w-full max-w-[1300px] h-full p-4 overflow-hidden">
                    {/* TITLE */}
                    <div className="w-full flex items-center mt-16 flex-col">
                        <h2 className="mb-16 flex items-center">
                            제주도&nbsp;
                            <span className="text-[#ef6d00] font-bold">인스타그램 </span>
                            <FaInstagram className=" inline-block" />
                        </h2>
                        {/* Grid Instagram */}
                        <div className="w-full h-full flex justify-center">
                            <div
                                id="Main_Grid"
                                className="w-full h-full text-white grid xl:grid-cols-4 grid-rows-2 gap-4"
                            >
                                <div className="flex justify-center items-center">
                                    <img
                                        src={data?.data[0].media_url}
                                        alt="empty"
                                        className="w-full h-[680px] object-cover object-center"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={data?.data[1].media_url}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={data?.data[2].media_url}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center "
                                    />
                                </div>
                                <div className=" flex justify-center items-center ">
                                    <img
                                        src={data?.data[3].media_url}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center"
                                    />
                                </div>
                                <div className=" flex justify-center items-center  ">
                                    <img
                                        src={data?.data[4].media_url}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
