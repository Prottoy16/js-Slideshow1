const slideShowElements=document.querySelectorAll(".element");
console.log(slideShowElements);
let count=0;
setInterval(()=>{
    count++; 
    let currentElement=document.querySelector(".current"); 
        currentElement.classList.remove("current");
    if(count>=slideShowElements.length){
        slideShowElements[0].classList.add("current");
        count=0;
    }
    else {
       
        currentElement.nextElementSibling.classList.add("current");
    }
    
    

    

},2000);

