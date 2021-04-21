document.addEventListener('DOMContentLoaded', () => {
  const descriptionDiv = document.querySelector('.post-description');
  fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
    .then(response => response.json())
      return response.json()
    // .then(function(response)){
    //    returnresponse.json().then(posts => {
    //      console.log(posts)
    //    })
    //  })
    .then(posts => {
      const post = posts[0];
      document.querySelector('.post-created-at').textContent = post.created_at;
      document.querySelector('.post-author').textContent = `By ${post.author}`;
      const postTitleA = document.querySelector('a.post-title');
      postTitleA.textContent = post.title;
      postTitleA.href = post.url;

      descriptionDiv.textContent = post.description;

      // let's start coding:
      return fetch(post.api.url)
    })
    .then(response => response.json())
    .then(fullPost => {
      document.querySelector('.post-content').textContent = fullPost.content
      descriptionDiv.classList.add('hidden')
    })
});


