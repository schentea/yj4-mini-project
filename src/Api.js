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
      `https://graph.instagram.com/25034924716155779/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=IGQWROWVprZAkw4VFk3ZA1lyblMwRDNIdmRrVHQtS21VQjI3U2kycEtVTmNxT2xIMzVVLUc0elVMYURmUmpfVlZAWT0VXMmw3S1J3TzlFcl9TVUktclBYb3RTSndZAQzR6Rzl5QkF3bTB3dTI1eWc5OUsyalJNYnNVU1NwVkVHaTlXV1hMUQZDZD`
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
