import axios from 'axios';


//GET: 모든 게시글 목록 반환
export async function getPosts(type, checks, search, country) {
  //.log(`post/${type}${checks}${search}${country}`)
  const response = await axios.get(
    `post/${type}${checks}${search}${country}`
  );
  return response.data;
}

//GET: 특정 게시글 반환
export async function getPost(id) {
  //console.log(`post/${id}`)
  const response = await axios.get(
    `post/${id}`
  );
  return response.data;
}

//GET: 특정 게시글의 댓글 반환
export async function getComments(id) {
  //console.log(`comment/${id}`)
  const response = await axios.get(
    `comment/${id}`
  );
  //console.log(response.data)
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

//Post: 회원가입 
export async function signUp(data) {
  const response = await axios.post(
    '/user/signup', data,
  {headers: {
    Authorization: ``,
    'Content-Type': 'application/json'
  }}
  )
  .catch(function (error) {
    console.log("signUp error");
    console.log(error)
  });
  console.log(data);
  // response.data
  console.log(response.data);
  if(response.data == 'The email is already existed!'){
  }
  window.location.href=`signin`;
}

//Post: 로그인 
export async function signIn(data) {
  const response = await axios.post(
    '/user/signin', data,
  {headers: {
    Authorization: ``,
    'Content-Type': 'application/json'
  }}
  )
  .catch(function (error) {
    console.log("signUp error");
    console.log(error)
  });
  console.log(data);
  // response.data
  console.log(response.data);
  if(response.data === -1){
    window.location.href=`signin`;
  }
  else {
    return response.data;
  }
    
}

//GET: 유저 정보 받기
export async function getUserInfo(userId) {
  //console.log(`user/profile/${userId}`)
  const response = await axios.get(
    `user/profile/${userId}`
  );
  return response.data;
}

//DELETE: 특정 게시글 삭제
export async function Delete(id) {
  //console.log(`post/${id}`)
  const response = await axios.delete(
    `post/${id}`
  );
  return response.data;
}


//GET: helpful 
export async function getHelpful(post_id) {
  const response = await axios.get(
    `post/helpful/${post_id}/${window.localStorage.getItem('user')}`
  );
  return response.data;
}

//PUT: helpful 
export async function helpful(data) {
  const response = await axios.put(
    `/post/helpful`, data,
    {headers: {
      Authorization: ``,
      'Content-Type': 'application/json'
    }}
    )
    .catch(function (error) {
      console.log("signUp error");
      console.log(error)
    });
  return response.data;
}

//POST: 게시물 스크랩하기
export async function Scrap(data) {
  const response = await axios.post(
    '/scrap', data,
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

//GET: 스크랩 목록 받기
export async function getScrap(userId) {
  //console.log(`scrap/my/${userId}`)
  const response = await axios.get(
    `scrap/my/${userId}`
  );
  return response.data;
}

//DELETE: 스크랩 삭제
export async function deleteScrap(data) {
  //console.log(data);
  const response = await axios.delete(
    `/scrap`,
    { data: data, headers: { Authorization: ``,
    'Content-Type': 'application/json' } })
    .catch(function (error) {
      console.log("signUp error");
      console.log(error)
    });
  return response.data;
}

