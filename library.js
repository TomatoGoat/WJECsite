let unit3Arrow = 1
let over = 0;


const showError = (_,x) => {
    console.log(_,x)
    document.getElementById(_).classList[['add','remove'][x]]('error')
}


const pxtovh = px => {
    let w = window.innerHeight;
    return ((px/w)*100)
}
const pxtovw = px => {
    let w = window.innerWidth;
    return ((px/w)*100)
}


const constrain = (val, lower, upper) => {
    if (val > upper) {
        return upper
    } else {
        if (val < lower) {
            return lower
        } else {
            return val
        }
    }


}

const override = () => {
    over = window.scrollY;
    console.log(window.scrollY)
}

const submit = () => {
    const noti = document.getElementById('notification')
    
    name = document.getElementById('name').value
    email = document.getElementById('email').value
    message = document.getElementById('message').value;

    ['name','email','message'].map(x=>showError(x,eval(x)?1:0));

    if (!name || !email || !message) return

    fetch('/query', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({
            'name': name,
            'email': email,
            'message': message
        })
    }).then(() => {
        noti.style.transform=  `translateX(-300px)`;
        document.getElementById('notificationText').innerHTML = 'Feedback sent!'
        document.getElementById('notification').classList.add('show')
        console.log(1)
        let i = 0
        const timer = setInterval(() => {
            document.getElementById('bar').style.width = `${i}%`
            i++
            if (i > 135) {
                noti.style.transform=  `translateX(300px)`;
                clearInterval(timer);
                document.getElementById('bar').style['border-bottom-left-radius'] = '2vh';
                //document.getElementById('notification').classList.remove('show')
            }
        }, 15)
    })
}

const rotateUnit3Arrow = (ID) => {
    if(unit3Arrow) {
        document.getElementById(ID).style.transform = `rotate(-90deg)`;
    } else {
        document.getElementById(ID).style.transform = `rotate(0deg)`;
    }
    unit3Arrow = !unit3Arrow;
}


document.addEventListener('scroll', e => {
    
    let g = constrain(window.scrollY, 0, 1)
    console.log(window.scrollY)
    if(window.scrollY == over) {
        g=0;
    }
    document.getElementById('top').style.height = `${16.51186790505676 - g * 4.12796697626419}vh`
    document.getElementById('top').style['background-color'] = `rgba(25, 24, 26, ${1-g*0.2})`;
    document.getElementById('titlename').style['font-size'] = `${2.580140734949179 - g * 0.41279669762641896}vh`;
    ['his', 'pol', 'poi', 'que'].map(x => {
        document.getElementById(`button${x}`).style.width = `${7.03125 - 0.625*g}vw`
        document.getElementById(`button${x}`).style.height = `${5.159958720330237 - 0.49535603715170273*g}vh`
        document.getElementById(`button${x}`).style['font-size'] = `${1.2 - 0.2*g}vw`
    })

})

const wass = balls => { }

document.addEventListener('click',e=>{
    console.log(e.target.getAttribute('name'))
    if (e.target.classList.value.split` `.includes('drops')) {
        document.getElementById(`dropdown${e.target.getAttribute('name')}`).classList.toggle('showdropdown')
    }
})