const targets = document.querySelectorAll('.target')

const options ={
    threshold:0.3   /* sayfa içindeki gösterme oranı*/
}

const callBack=(entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
        else{
            entry.target.classList.remove('active')
        }
    })
}


const abserver = new IntersectionObserver(callBack, options);

targets.forEach((target)=>{
    abserver.observe(target)
})
