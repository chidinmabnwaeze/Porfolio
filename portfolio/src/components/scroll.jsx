 export const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
    })
    })
    
    const homeElements = document.querySelectorAll('.js-scroll');
    homeElements.forEach((event)=> observer.observe(event))