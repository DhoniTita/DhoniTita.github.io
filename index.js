function add1(){
    document.querySelector('.c1').classList.toggle('show')
}
function add2(){
    document.querySelector('.c2').classList.toggle('show')
}
function add3(){
    document.querySelector('.c3').classList.toggle('show')
}
function add4(){
    document.querySelector('.c4').classList.toggle('show')
}

window.addEventListener('scroll', () => {
    let scroll = window.scrollY
    console.log(scroll)

    if(scroll < 778.4000244140625){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.home').classList.add('active')
    }
    else if(scroll < 1507.199951171875){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.about').classList.add('active')
    }
    else if(scroll < 2908){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.skill').classList.add('active')
    }
    else if(scroll < 3448){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.project').classList.add('active')
    }
    else if(scroll = 3448){
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.contact').classList.add('active')
    }
})