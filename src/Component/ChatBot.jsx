import React from "react";
import Chat from "../image/chat.png";

export default function ChatBot() {
  const openPopup = (url) => {
    // window.open()의 첫 번째 인자는 URL입니다.
    // 두 번째 인자는 타겟(window name)입니다. '_blank'는 새 창을 의미합니다.
    // 세 번째 인자는 창의 속성을 정의하는 문자열입니다. 여기서는 팝업의 크기와 위치를 설정합니다.
    const popupWindow = window.open(url, "_blank", "width=350,height=600,left=200,top=200");
    // 팝업 차단기가 팝업을 차단하지 않도록 초점을 맞춥니다.
    if (popupWindow) popupWindow.focus();
  };

  return (
    <div className="fixed bottom-4 right-4 z-20 cursor-pointer" onClick={() => openPopup("https://visitjeju.xinapse.ai/")}>
      <img id="hidden_img" src={Chat} alt="" className="w-28" />
    </div>
  );
}
