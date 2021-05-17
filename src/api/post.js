import axios from 'axios';

//GET: 모든 게시글 목록 반환
export async function getPosts(type) {
  console.log(type)
  const response = await axios.get(
    `post/${type}`
  );
  return response.data;
}

//GET: 특정 게시글 반환
export async function getPost(id) {
  const response = await axios.get(
    `${id}`
  );
  return response.data;
}