import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { useQuery } from "react-query";
import { insta } from "../Api";

export default function JejuInstagram() {
  const { data } = useQuery("insta", insta);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      setImages(data.data.slice(0, 5).map((item) => item.media_url));
    }
  }, [data]);

  return (
    <>
      <section id="sns" className="w-full h-auto flex justify-center relative mb-32 mt-48 lg:mt-96 xl:mt-0">
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
              <div id="Main_Grid" className="w-full h-full text-white grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4">
                {images.map((imageUrl, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <img src={imageUrl} alt={`img-${index}`} className="w-full h-auto object-cover object-center" style={{ minWidth: 0 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
