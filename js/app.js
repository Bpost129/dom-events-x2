const likeButton = document.querySelector('#like-button')
const dislikeButton = document.querySelector('#dislike-button')
const commentButton = document.querySelector('#comment-button')
const commentList = document.querySelector('ul')
const inputElement = document.querySelector('input')
const likesCountElement = document.querySelector('#likes-count')

let likesCount = 0

const handleReaction = (e) => {
  e.target.id === 'like-button' ? likesCount += 1 : likesCount -= 1
  likesCountElement.textContent = likesCount
  console.log(likesCount)
}

likeButton.addEventListener('click', handleReaction)
dislikeButton.addEventListener('click', handleReaction)

commentButton.addEventListener('click', () => {
  if (inputElement.value) {
    const commentElement = document.createElement('li')
    commentElement.textContent = inputElement.value
    commentList.appendChild(commentElement)
    inputElement.value = ''
  }
})