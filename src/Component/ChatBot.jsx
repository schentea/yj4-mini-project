import React from "react";
import Chat from "../image/chat.png";

export default function ChatBot() {
  return (
    <a href="https://visitjeju.xinapse.ai/" target="_blank" rel="noreferrer">
      <div className="fixed bottom-4 right-4 z-20">
        <img id="hidden_img" src={Chat} alt="" className="w-28" />
      </div>
    </a>
  );
}
