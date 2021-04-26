console.log('%c HI', 'color: firebrick')

window.addEventListener("DOMContentLoad", ()=>{
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => json)
})