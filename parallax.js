// parallax //

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
         if(entry.isIntersecting) {
            entry.target.classList.add("show-items");
         } else {
            entry.target.classList.remove("show-items");
         }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

