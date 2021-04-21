const putBlock = (title, content) => {
  const blockDiv = document.createElement('div');
  blockDiv.className = 'p-4 border-dashed border-4 border-gray-600';
  const titleH3 = document.createElement('h3');
  titleH3.className = 'font-semibold';
  titleH3.textContent = title;
  blockDiv.appendChild(titleH3);
  const contentP = document.createElement('p');
  contentP.textContent = content;
  blockDiv.appendChild(contentP);
  document.getElementById('blocks').appendChild(blockDiv);
  return blockDiv;
}
const putPost = (post, method) => {
  putBlock(`[Post (${method})] ${post.title}`, `${post.author}: ${post.description}`);
}

document.addEventListener('DOMContentLoaded', () => {
  const clockDOM = document.getElementById('clock');
  setInterval(() => {
    clockDOM.textContent = (new Date()).toLocaleTimeString();
  }, 1000);

  document.getElementById('prompt').addEventListener('click', () => {
    const input = prompt();
    putBlock('Prompt:', input);
  });

  document.getElementById('fetch-sync').addEventListener('click', () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open#parameters
    xhr.open('GET', 'https://pastleo-posts-api.herokuapp.com/api/posts?delay', /* async: */ false);
    xhr.send();
    putPost(JSON.parse(xhr.response)[0], 'sync');
  });

  document.getElementById('fetch-callback').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pastleo-posts-api.herokuapp.com/api/posts?delay', /* async: */ true);
    xhr.send();
    xhr.addEventListener('load',() => {
      putPost(JSON.parse(xhr.response)[0], 'callback');
    });
  });
});
