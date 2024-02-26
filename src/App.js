import React from 'react';

import NowTaday from './Component/NowTaday';
import TravelTip from './Component/TravelTip';
import JejuInstagram from './Component/JejuInstagram';

import LayOut from './Component/LayOut';
function App() {
    return (
        <>
            {/* 헤더 */}
            <LayOut>
                {/* 지금 제주도! 여기어떄요? */}
                <NowTaday />
                {/* 준비하고 떠나는 여행TIP */}
                <TravelTip />
                {/* 제주도 인스타그램 */}
                <JejuInstagram />
                {/* 푸터 */}
            </LayOut>
        </>
    );
}

export default App;
