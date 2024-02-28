import React from "react";

import NowTaday from "./Component/NowTaday";
import TravelTip from "./Component/TravelTip";
import JejuInstagram from "./Component/JejuInstagram";

import LayOut from "./Component/LayOut";
import KaKaoMap from "./Component/KaKaoMap";
import ChatBot from "./Component/ChatBot";
function App() {
  return (
    <>
      {/* 헤더 */}
      <LayOut>
        {/* 준비하고 떠나는 여행TIP */}
        <TravelTip />
        {/* 지금 제주도! 여기어떄요? */}
        <NowTaday />
        {/* 제주도 인스타그램 */}
        {/* <JejuInstagram /> */}
        {/* 지도API */}
        <KaKaoMap />
        {/* 푸터 */}
        <ChatBot />
      </LayOut>
      {/* 업데이트하자 */}
    </>
  );
}

export default App;
