import { FaInstagram } from 'react-icons/fa6';
import Harbang from '../image/Harbang.jpg';
import Chat from '../image/chat.jpg';
export default function JejuInstagram() {
    return (
        <>
            <section className="w-full h-auto flex justify-center relative mb-32">
                <img id="hidden_img" src={Chat} alt="" className=" absolute -bottom-8 right-[8vw] w-40 hidden" />

                <div className="w-full max-w-[1300px] h-full p-4 overflow-hidden">
                    {/* TITLE */}
                    <div className="w-full flex items-center mt-16 flex-col">
                        <h2 className="mb-16 flex items-center">
                            제주도 <span className="text-[#ef6d00] font-bold">인스타그램</span>
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
                                        src={Harbang}
                                        alt="empty"
                                        className="w-full h-[680px] object-cover object-center"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={Harbang}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={Harbang}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center "
                                    />
                                </div>
                                <div className=" flex justify-center items-center ">
                                    <img
                                        src={Harbang}
                                        alt="empty"
                                        className="w-full h-[330px] object-cover object-center"
                                    />
                                </div>
                                <div className=" flex justify-center items-center  ">
                                    <img
                                        src={Harbang}
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
