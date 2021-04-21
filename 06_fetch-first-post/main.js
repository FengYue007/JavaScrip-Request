// let's start coding:

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
    .then(request => request.json())
    .then(posts => { 
    console.log(posts)

    const firstPost = posts[0];

    const postTitleA = document.querySelector('.post-title')

    document.querySelector('.post-title').textContent = firstPost.title
    document.querySelector('.post-created-at').textContent = firstPost.created_at
    document.querySelector('.post-author').textContent = firstPost.author
    document.querySelector('.post-description').textContent = firstPost.description    

    const post = document.querySelector('.post-link')
    postLinkA.classList.remove('hidden')
    postLinkA.href = firstPost.url;
   })
})


