const timer = new Timer()
timer.reset()

const action = (action="stop")=>{
    switch(action.toLowerCase()){
        case "start":
            timer.start()
            break
        default:
            timer.stop()
            break

    }

}

const navlinks = document.querySelectorAll('.nav > ul > li')
const navbg = document.getElementById('indicator')

navlinks.forEach((navItem, i)=>{
    navItem.addEventListener('click',()=>{
        navlinks.forEach((nav)=>{
            nav.classList.remove('active')
            navbg.style.marginLeft= `calc(calc(100%/3)*${i})`
            navItem.classList.add('active')
        })
    })

})


