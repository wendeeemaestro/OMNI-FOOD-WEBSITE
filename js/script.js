
// SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


// MAKE MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".mobile-hamburger");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

// SMOOTH SCROLLING ANIMATION 
const allLinks = document.querySelectorAll("a:link");
const


//    ******FIXING FLEXBOX GAP PROPERTY MISSING IN SOME SAFARI VERSIONS******

// function checkFlexGap() 
//     var flex = document.createElement("div");
//     flex.style.display = "flex";
//     flex.style.flexDirection = "column";
//     flex.style.rowGap = "1px";

//     flex.appendChild(document.createElement("div"));
//     flex.appendChild(document.createElement("div"));

//     document.body.appendChild(flex);
//     var isSupported = flex.scrollHeight === 1;
//     flex.parentNode.removeChild(flex);
//     console.log(isSupported);

//     if (!isSupported) document.body.classList.add("no-flexbox-gap"); 
// }
// checkFlexboxGap();


// $("button").on("click",function(){
//     $("h1").fadeToggle();
// });

// $("h1").on("click",function(){
//     $("h1").css("color","yellow");
// });