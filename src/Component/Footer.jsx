import FooterLogo from '../image/footerlogo.jpg';

export default function Footer() {
    return (
        <>
            <footer className="w-full xl:h-[120px] bg-[#FFF2E5] xl:flex justify-between">
                {/* 푸터 왼쪽 */}
                <div className="xl:w-1/2 xl:ml-16 ml-8 h-full flex flex-col xl:justify-center">
                    <div>
                        <h2>API</h2>
                    </div>
                    <div className="flex xl:space-x-6 space-x-16 font-bold  mr-8">
                        <p>Instagram API</p>
                        <p>Visitjeju Tour API</p>
                        <p>Weather API</p>
                    </div>
                </div>
                {/* 푸터 오른쪽 */}
                <div className="xl:w-1/2 w-[200px] flex justify-between xl:justify-end space-x-16 xl:space-x-0  items-center xl:mr-16 ml-8 mt-4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/6bf0/5ce2/f84a210f5c24628860b69e4ccb51a023?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5-RKxPRXRAdPlg~6Q-s1SVplxTGi5zgqIGA8vT7N~eH57VPu2fOlMnl71V7pd~lWeuVWmzDpTQAs5852ywsUxyP8sLtMG5lW2E8wJzLYJFGQ91VAhYp~weO-3tjKmtCLv8Uc-y~uevAIyDloELzLqSrzrpU8lJmbtnyOgDQszfjbKRHi1EC4CWNNRSB6RL51A1g~-TkW64v9o5NGX0XzDrH~1kGaM0deH~3iTIrF4nirQcWZMPxsyz9azuB2rMueuy88WGndIFyvMiq6ZXu8XDPjApy~Nbd3EhyatTZbLKOFeh40xEhKfFnpfort9w6k2A745JsXOtSM7YD-9FMrg__"
                        alt=""
                    />
                    <img className="xl:h-[60%]" src={FooterLogo} alt="" />
                </div>
            </footer>
        </>
    );
}
