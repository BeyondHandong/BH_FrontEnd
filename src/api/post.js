import axios from 'axios';

//GET: 모든 게시글 목록 반환
export async function getPosts() {
  const response = await axios.get(
    '/post'
  );
  return response.data;
}

//GET: 특정 게시글 반환
export async function getUser(id) {
  const response = await axios.get(
    `post/${id}`
  );
  return response.data;
}