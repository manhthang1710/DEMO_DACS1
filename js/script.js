const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click",function(){
    menuBar.classList.toggle("active")
   document.querySelector(".menu-items").classList.toggle("active")
})
const toP= document.querySelector(".top")
window.addEventListener("scroll",function(){
    const x=this.pageXOffset;
     if(x>80){toP.document.querySelector("top").classList.add("active")
     }
     else{toP.document.querySelector("top").classList.remove("active")}
})