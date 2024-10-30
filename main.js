/*
    scrollHeight: Entire Content & Padding (Visible or Not)
    clientHeight: Visible Content & padding
*/

let el = document.querySelector(".srcoller");
let height = document.documentElement.scrollHeight -  document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight)
console.log(document.documentElement.clientHeight)
console.log(height)

window.addEventListener("scroll" ,()=>{
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
   el.style.width = `${(scrollTop/height)*100}%`
})