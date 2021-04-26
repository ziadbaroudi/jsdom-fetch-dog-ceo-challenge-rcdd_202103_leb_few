console.log('%c HI', 'color: firebrick');

window.addEventListener("DOMContentLoaded", ()=>{
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  // const breedUrl = 'https://dog.ceo/api/breeds/list/all'
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
  
  function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {

      breeds = Object.keys(results.message);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
}

function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateColor(event) {
  event.target.style.color = 'palevioletred';
}
loadBreedOptions();
});
