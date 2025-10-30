const likeButton = document.querySelector('#like-button')
const commentButton = document.querySelector('#comment-button')
const commentList = document.querySelector('ul')



likeButton.addEventListener('click', () => {
  console.log('You clicked me!')
})

commentButton.addEventListener('click', () => {
  const commentElement = document.createElement('li')
  commentElement.textContent = 'Can you hear me?'
  commentList.appendChild(commentElement)
})