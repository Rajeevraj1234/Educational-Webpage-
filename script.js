// navbar slider code 

const navCnt = document.querySelector(".nav-cnt");
const btn = document.querySelector(".nav-btn"); 
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

btn.addEventListener("click",()=>{
    navCnt.classList.toggle("active-navbar");
    bar1.classList.toggle("bar1toggle");
    bar2.classList.toggle("bar2toggle");
    bar3.classList.toggle("bar3toggle");
})
