export async function jeju() {
  try {
    return await fetch(
      `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=1de2gai8arabr3w3&locale=kr&category=c1&pag%20%20%20%20e=1`
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
