console.log('%c HI', 'color: firebrick');

window.addEventListener("DOMContentLoaded", ()=>{
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {json.message.forEach(image => addimg(image));
    
  });
  
  fetch(breedUrl)
  .then(res => res.json())
  .then(json => {})
  
  function addimg(url){
    let div = document.getElementById("dog-image-container");
    let im = document.createElement("img");
    im.src = url;
    div.appendChild(im);
  }
  
  function breed(b){
    let ul = document.getElementById("dog-breeds");
    removeChildren(ul);
    b.forEach(breed=>)
  }
});
