const likeButton = document.querySelector('#like-button')
const dislikeButton = document.querySelector('#dislike-button')
const commentButton = document.querySelector('#comment-button')
const commentList = document.querySelector('ul')
const inputElement = document.querySelector('input')
const likesCountElement = document.querySelector('#likes-count')


const bodyElement = document.querySelector('body')
const divElement = document.querySelector('div')

bodyElement.addEventListener('click', () => {
  console.log('body')
})

divElement.addEventListener('click', () => {
  console.log('div')
})


let likesCount = 0

const handleReaction = (e) => {
  console.log(e.target.id)
  if (e.target.id === 'like-button') {
    likesCount += 1 
    likesCountElement.textContent = likesCount
  } 
  if (e.target.id === 'dislike-button') {
    likesCount -= 1 
    likesCountElement.textContent = likesCount
  }
  e.stopPropagation()
}

divElement.addEventListener('click', handleReaction)
// likeButton.addEventListener('click', handleReaction)
// dislikeButton.addEventListener('click', handleReaction)

commentButton.addEventListener('click', () => {
  if (inputElement.value) {
    const commentElement = document.createElement('li')
    commentElement.textContent = inputElement.value
    commentList.appendChild(commentElement)
    inputElement.value = ''
  }
})