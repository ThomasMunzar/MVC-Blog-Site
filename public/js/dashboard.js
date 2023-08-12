document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/api/posts');
      const posts = await response.json();
  
      const postsContainer = document.querySelector('.posts-container');
      postsContainer.innerHTML = '';
  
      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        `;
        postsContainer.appendChild(postDiv);
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  });