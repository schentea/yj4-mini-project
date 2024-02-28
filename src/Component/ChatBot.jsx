import React from "react";
import Chat from "../image/chat.png";

export default function ChatBot() {
  const openPopup = (url) => {
    const popupWindow = window.open(url, "_blank", "width=370,height=600,left=200,top=200");
    if (popupWindow) popupWindow.focus();
  };

  return (
    <div className="fixed bottom-4 right-4 z-20 cursor-pointer" onClick={() => openPopup("https://visitjeju.xinapse.ai/")}>
      <img id="hidden_img" src={Chat} alt="제주관광공사챗봇" className="w-28" />
    </div>
  );
}
