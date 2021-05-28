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
  console.log(`post/${id}`)
  const response = await axios.get(
    `post/${id}`
  );
  return response.data;
}

//GET: 특정 게시글의 댓글 반환
export async function getComments(id) {
  console.log(`comment/${id}`)
  const response = await axios.get(
    `comment/${id}`
  );
  console.log(response.data)
  return response.data;
}


//POST: 특정 게시글 저장 
export async function sendPost(data) {
  const response = await axios.post(
    '/post', data, 
    {headers: {
        Authorization: ``,
        'Content-Type': 'application/json'
      }}
    ).catch(function (error) {
      console.log("send post error");
      console.log(error)
    });

    console.log(data);
}


//Post: 특정 게시글의 댓글 쓰기
export async function sendComment(data) {
  const response = await axios.post(
    '/comment', data,
  {headers: {
    Authorization: ``,
    'Content-Type': 'application/json'
  }}
  ).catch(function (error) {
    console.log("send comment error");
    console.log(error)
  });
  console.log(data);
}