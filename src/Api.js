const USER_ID = process.env.REACT_APP_USER_ID;
const TOKEN = process.env.REACT_APP_TOKEN;
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

// 인스타 api
export async function insta() {
  try {
    return await fetch(
      `https://graph.instagram.com/${USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=${TOKEN}`
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
