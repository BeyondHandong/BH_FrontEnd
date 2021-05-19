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


//POST: 특정 게시글 반환
export async function sendPost() {
  const response = await axios.post(
    '/post', {
      writerId: 5,
      writerName: 'Williams',
      type: '일반',
      title: 'Williams',
      content: 'Williams',
      country: 'Williams',
      category: 'Williams',
      sector: ''
    });
  return response.data;
}