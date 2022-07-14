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
var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");

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
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("ImgThumbnail");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  modalImage.src = x[slideIndex-1].src;
}

function submitContactForm() {
    var name = document.getElementById("response-name").value;
    var email = document.getElementById("email").value;
    
    alert("Hi " + name + ". Thank you for your message. A reply might be sent to " + email + ". In the meantime please feel free to check out the gallery and works of James McCarthy.");
    
    document.getElementById("response-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
