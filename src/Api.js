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
      `https://graph.instagram.com/25034924716155779/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=IGQWRPclJjUUpWQ1V6eHZA3WmZA5TlREeGNXSlZA4eHF0WXlEbGE2QnY2OXhBZAEdrMFo1R0ZAlZAzBWWi1vbERRb2c1SGhHSjhvOWVhMTFoX0duX09XS0VlenFUR2FFWmFIY21fakl5QWx3cy11QW1qYTRXUExiNEZAFTENTVHM2cDlZAWXpKUmcZD`
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
