import React, { useEffect, useState } from "react";
import Chat from "../image/chat.png";

export default function ChatBot() {
  const [bottom, setBottom] = useState("15px");

  useEffect(() => {
    const handleScroll = () => {
      const footerTop = document.querySelector("footer").getBoundingClientRect().top;

      if (footerTop <= window.innerHeight) {
        setBottom(`${window.innerHeight - footerTop + 15}px`);
      } else {
        setBottom("15px");
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openPopup = (url) => {
    const popupWindow = window.open(url, "_blank", "width=370,height=600,left=200,top=200");
    if (popupWindow) popupWindow.focus();
  };

  return (
    <div className="fixed right-4 z-20 cursor-pointer" onClick={() => openPopup("https://visitjeju.xinapse.ai/")} style={{ bottom: bottom }}>
      <img id="hidden_img" src={Chat} alt="제주관광공사챗봇" className="w-28" />
    </div>
  );
}
