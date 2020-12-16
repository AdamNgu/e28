export const postPost = async (post) => {
  const postURL = "http://e28-api.adamnguyen.loc/post";
  fetch(postURL, { method: "POST", body: JSON.stringify(post) });
};

export const getPosts = async () => {
  const postURL = "http://e28-api.adamnguyen.loc/post";
  const data = await fetch(postURL);
  const json = await data.json();
  return json.post;
};

export const getPost = async (postId) => {
  const postURL = `http://e28-api.adamnguyen.loc/post/${postId}`;
  const data = await fetch(postURL);
  const json = await data.json();
  return json.post;
};
