// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_modal_lightbox
//https://www.w3schools.com/howto/howto_js_image_zoom.asp
//https://www.youtube.com/watch?v=TawH-AqHTXc
let bg = document.getElementById("bg");
let topPart = document.getElementById("topPart");
let middlePart = document.getElementById("middlePart");
let bottomPart = document.getElementById("bottomPart");
//
var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    
    bg.style.top;
    topPart.style.top = value * 1 + 'px';
    middlePart.style.top = value * 0.9 + 'px';
    bottomPart.style.top = value * 0.5 + 'px';
})

Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
   });
});

document.querySelector(".close").addEventListener("click", () => {
   modalEle.style.display = "none";
});
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
    if(isMag==true)
    {
       glass.remove();
       isMag=false;
       
    }
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var captionText = document.getElementById("caption");
    var x = document.getElementsByClassName("ImgThumbnail");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    modalImage.src = x[slideIndex-1].src;
    captionText.innerHTML = x[slideIndex-1].alt;
}



var img, glass, w, h, bw;
function magnify(zoom) {
  img = modalImage;
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
var isMag = false;
function mag(){
  if(isMag==false)
  {
     magnify(3);
     isMag=true;
     
  }
  else
  {
     glass.remove();
     isMag=false;
  }
  
}
function loadTasks() {
    fetch('/list-tasks').then(response => response.json()).then((tasks) => {
      const taskListElement = document.getElementById('task-list');
      tasks.forEach((task) => {
        taskListElement.appendChild(createTaskElement(task));
      })
    });
  }
  document.getElementById('submit-button').onclick = function() {
    var name = document.getElementById("response-name").value;
    var email = document.getElementById("email").value;
    
    alert("Hi " + name + ". Thank you for your message. A reply might be sent to " + email + ". In the meantime please feel free to check out the gallery and works of James McCarthy.");

};

