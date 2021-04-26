console.log('%c HI', 'color: firebrick');

window.addEventListener("DOMContentLoaded", ()=>{
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {json.message.forEach(image => add(image));
    
  });
  
  function add(url){
    let div = document.getElementById("dog-image-container");
    let im = document.createElement("img");
    im.src = url;
    div.appendChild(im);
  }
});
