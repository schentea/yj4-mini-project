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

// 장기 토큰
const longTermToken =
  "IGQWROMzJ2ZAVplc1ZAobXdvcGExdzhRR3VZAaDJPSlB0NUotaGdtTW0yai1heF91S3lsSExZAS0Q0ejNNb3NNNm9PU09wVVdNY1NLOUlwSTBMejRleE1FSDd6RnQxVGxqWGxhX2lVMFFTb1ZAwMEMzZA1VHWFBPdVp6MlRWb0ZAZAS0gtbGN5XzQZD";

// 인스타 api 요청
export async function insta() {
  try {
    return await fetch(
      `https://graph.instagram.com/25034924716155779/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=${longTermToken}`
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
