let settings = {
    pomodoro: 25,
    shortbreak: 5,
    longbreak:15,
    font:"kumbh Sans",
    color:"orange",
}

let settingsDefault = {
    pomodoro: 25,
    shortbreak: 5,
    longbreak:15,
    font:"kumbh Sans",
    color:"orange",
}

const form = document.getElementsByTagName('form')[0];
const apply = document.getElementById('apply');
const applybg = document.getElementById('applybg');
const circle = document.querySelector('#ring > circle');
const settingsContainer = document.getElementById('settingscontainer');
const close = document.getElementById('close');

close.addEventListener('click', ()=>{
    settingsContainer.style.visibility = 'hidden'
    settingsContainer.style.opacity = 0

})


const mapSettings = (setting,val)=>{
    settings[setting] = val;
    document.querySelectorAll("form h2, form h4, #apply").forEach((item)=>{
        item.getElementsByTagName.fontFamily = settings.font;

    })
    applybg.style.backgroundColor = `var(--${settings.color})`;


}

const updateSettings = () =>{
    navbg.style.backgroundColor = `var(--${settings.color})`;
    navbg.style.stroke = `var(--${settings.color})`;
    document.body.style.fontFamily = settings.font;
    timer.pomodoro = settings.pomodoro;
    timer.shortbreak = settings.shortbreak;
    timer.longbreak = settings.longbreak;

    timer.reset();

    
}
const inc = (input) =>{
    const inputEl = document.getElementById(input)

    inputEl.stepUp(1)
    mapSettings(input, inputEl.value)

}

const dec = (input) =>{
    const inputEl = document.getElementById(input)
    
    inputEl.stepDown(1)
    mapSettings(input, inputEl.value)

}


const fontButtons = document.querySelectorAll('.font')

fontButtons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        fontButtons.forEach((button)=>button.classList.remove('fontactive'))

            btn.classList.add('fontactive')

            if(btn.classList.contains("kumbh")){
                mapSettings('font','"Kumbh Sans",san-serif');
            }
            else if(btn.classList.contains("roboto")){
                mapSettings('font','"Roboto Slab",serif');
            }
            else{
                mapSettings('font','"Space Mono",monospace');

            }
        

    })
})

const colors = document.querySelectorAll('.color')

colors.forEach((color)=>{
    color.addEventListener('click', ()=>{
        

            if(color.classList.contains("orange")){
                mapSettings('color','orange');
            }
            else if(color.classList.contains('blue')){
                mapSettings('color','cyan');
            }
            else{
                mapSettings('color','purple');

            }
            colors.forEach((color)=>color.classList.remove('coloractive'))

            color.classList.add('coloractive')
        

    })
})

apply.addEventListener('click', (e)=>{
    e.preventDefault();
    updateSettings()
    settingsDefault = settings
    settingsContainer.style.visibility = "hidden"
    settingsContainer.style.display = "none"
    settingsContainer.style.opacity = 0

})


document.querySelector('#settings > img').addEventListener('click', ()=>{
    settingsContainer.style.visibility = "visible"
    settingsContainer.style.opacity = 1
    settingsContainer.style.display = "flex"

})