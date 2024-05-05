const box = document.querySelector('.box');

const callback = (entries) =>{
   
    console.log(entries[0].isIntersecting); 
}


const observer = new IntersectionObserver(callback);


observer.observe(box);