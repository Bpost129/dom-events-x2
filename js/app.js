const likeButton = document.querySelector('#like-button')
const commentButton = document.querySelector('#comment-button')
const commentList = document.querySelector('ul')
const inputElement = document.querySelector('input')

console.dir(inputElement)

const handleLike = () => {
  console.log('You clicked me!')
}

likeButton.addEventListener('click', handleLike)

commentButton.addEventListener('click', () => {
  if (inputElement.value) {
    const commentElement = document.createElement('li')
    commentElement.textContent = inputElement.value
    commentList.appendChild(commentElement)
    inputElement.value = ''
  }
})