document.addEventListener('DOMContentLoaded', async () => {
  /*
  fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
    .then(response => response.json())
    .then(posts => {
      const post = posts[0];
      document.querySelector('.post-created-at').textContent = post.created_at;
      document.querySelector('.post-author').textContent = `By ${post.author}`;
      const postTitleA = document.querySelector('a.post-title');
      postTitleA.textContent = post.title;
      postTitleA.href = post.url;
      const descriptionDiv = document.querySelector('.post-description');
      descriptionDiv.textContent = post.description;

      return fetch(post.api_url);
    })
    .then(response => response.json())
    .then(post => {
      const descriptionDiv = document.querySelector('.post-description');
      descriptionDiv.classList.add('hidden');
      const contentPre = document.querySelector('.post-content');
      contentPre.textContent = post.content;
    })
  */

  const postsResponse = await fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
  const posts = await postsResponse.json()
  let post = posts[0];

  document.querySelector('.post-created-at').textContent = post.created_at;
  document.querySelector('.post-author').textContent = `By ${post.author}`;
  const postTitleA = document.querySelector('a.post-title');
  postTitleA.textContent = post.title;
  postTitleA.href = post.url;
  const descriptionDiv = document.querySelector('.post-description');
  descriptionDiv.textContent = post.description;

  const postResponse = await fetch(post.api_url);
  post = await postResponse.json();

  descriptionDiv.classList.add('hidden');
  const contentPre = document.querySelector('.post-content');
  contentPre.textContent = post.content;
});

