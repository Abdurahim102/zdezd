const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slide = document.querySelector('.slide')
let keys = 0
const starRaiting = document.querySelectorAll(".fa-star");
left.addEventListener("click",()=>{
        keys++;
        if (keys > 2) {
            keys = -2
        }

       


    slide.style.transform =`translateX(${keys * 300}px)`
})

right.addEventListener("click",()=>{
    keys--;
    if (keys < -2) {
        keys = 2
    }

slide.style.transform =`translateX(${keys * 300}px)`
})



function handleActiveStar() {
  let star = this;
  let parent = star.parentNode;
  parent.dataset.value = 0;
  for (const child of parent.children) {
    child.classList.add('fa-regular');
    child.classList.remove('fa-solid');
  }
  while (star) {
    parent.dataset.value++;
    star.classList.remove('fa-regular');
    star.classList.add('fa-solid');
    star = star.previousElementSibling;
  }
  
}

starRaiting.forEach(star => {
  star.addEventListener("click", handleActiveStar);
});
