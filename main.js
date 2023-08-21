// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

const dynamicText = document.querySelector("h1 span");
const words = ["is an exciting blog that has something for you", "is a multi-disciplinary blog that explores various issues in life", "has lifestyle, trends, and even medical news for you", ", the everything blog!"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 110);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 65);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1500);
    }
}
typeEffect();

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  var theFrame=document.createElement('iframe')
// theFrame.src="https://www.powr.io/comments/i/26790199#page"
theFrame.src="https://www.powr.io/comments/i/36595603#page"
document.body.appendChild(theFrame)



//document.appendChild isn't reliable since it says some ONLY ALLOWS ONE APPENDAGE or something like that
//the above code only works if cors doesn't block you, meaning that your source for this would be from powr.io as well(THIS IS A SANDBOX SO IT GETS BLOCKED BECAUSE OF ORIGIN DIFFERENCE)

//if i run the code below, it works on newtab(if u pop up the console paste and enter)
document.write('<div class="powr-comments" id="b616b806_1692565920"></div>')
var x=document.createElement('script')
x.src="https://www.powr.io/powr.js?platform=html"
document.body.appendChild(x)