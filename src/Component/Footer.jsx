import FooterLogo from "../image/footerlogo.jpg";

export default function Footer() {
  return (
    <>
      <footer className="w-full xl:min-h-[130px] bg-[#FFF2E5] xl:flex justify-between pt-4">
        {/* 푸터 왼쪽 */}
        <div className="xl:w-1/2 xl:ml-16 ml-8 h-full flex flex-col xl:justify-center text-[#666]">
          <div className="mb-2">
            <h2 className="text-4xl font-bold">API</h2>
          </div>
          <div className="flex flex-wrap xl:gap-x-6 gap-x-16 gap-y-1 font-semibold mr-8">
            <p>Instagram API</p>
            <p>Visitjeju Tour API</p>
            <p>Weather API</p>
          </div>
        </div>
        {/* 푸터 오른쪽 */}
        <div className="xl:w-1/2 min-w-[200px] flex flex-wrap xl:justify-end gap-x-1 items-center xl:mr-16 ml-8">
          <img
            src="https://s3-alpha-sig.figma.com/img/6bf0/5ce2/f84a210f5c24628860b69e4ccb51a023?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5-RKxPRXRAdPlg~6Q-s1SVplxTGi5zgqIGA8vT7N~eH57VPu2fOlMnl71V7pd~lWeuVWmzDpTQAs5852ywsUxyP8sLtMG5lW2E8wJzLYJFGQ91VAhYp~weO-3tjKmtCLv8Uc-y~uevAIyDloELzLqSrzrpU8lJmbtnyOgDQszfjbKRHi1EC4CWNNRSB6RL51A1g~-TkW64v9o5NGX0XzDrH~1kGaM0deH~3iTIrF4nirQcWZMPxsyz9azuB2rMueuy88WGndIFyvMiq6ZXu8XDPjApy~Nbd3EhyatTZbLKOFeh40xEhKfFnpfort9w6k2A745JsXOtSM7YD-9FMrg__"
            alt="img"
          />
          <img className="xl:h-[60%] w-[200px]" src={FooterLogo} alt="img" />
        </div>
      </footer>
    </>
  );
}
