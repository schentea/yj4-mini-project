//제주관광공사 api
export async function jeju() {
  try {
    return await fetch(
      `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=1de2gai8arabr3w3&locale=kr&category=c1&pag%20%20%20%20e=1`
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// 인스타 api 장기 토큰 자동 갱신
let accessToken = "";

async function refreshAccessToken() {
  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`,
      { method: "POST" }
    );
    const data = await response.json();
    accessToken = data.access_token;
    console.log("새로운 액세스 토큰:", accessToken);
  } catch (error) {
    console.error("액세스 토큰 갱신 중 오류 발생:", error);
  }
}

// 토큰을 주기적으로 갱신하기
setInterval(refreshAccessToken, 60 * 60 * 1000); // 1시간마다 갱신

// 장기 토큰
const longTermToken =
  "IGQWRNS2JIY1NUN0p2ME1BM0dhTUNSZAVM3NERHUjMwVi1XRVdNeEpYb1NsTXN4WFNlY1BHV242MjhTd09LLTBHY203eG5pSGtrOWdvWnFnN1ZA4M2gwT2ZAzY2p0RTBlcWUyVVlwenZAaazlOOEpQc1dZAeUtodTRUSV85MklPYVJrem5jdwZDZD";
accessToken = longTermToken;

// 인스타 api 요청
export async function insta() {
  try {
    return await fetch(
      `https://graph.instagram.com/25034924716155779/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=${accessToken}`
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
