let a = 0
let b = 0
let c = 0
let sum = 0
let flag = 0
let zar = document.querySelectorAll('.zarayeb>button')
let num = document.querySelectorAll('.numb>button')
document.getElementsByClassName('jam')[0].addEventListener('click',(e)=>{
    a = document.getElementById('bord').value
    document.getElementById('bord').value=''
    document.getElementById('bord').focus()
    b = 1
})
document.getElementsByClassName('kam')[0].addEventListener('click',(e)=>{
    a = document.getElementById('bord').value
    document.getElementById('bord').value=''
    document.getElementById('bord').focus()
    b = 2
})
document.getElementsByClassName('zarb')[0].addEventListener('click',(e)=>{
    a = document.getElementById('bord').value
    document.getElementById('bord').value=''
    document.getElementById('bord').focus()
    b = 3
})
document.getElementsByClassName('tagh')[0].addEventListener('click',(e)=>{
    a = document.getElementById('bord').value
    document.getElementById('bord').value=''
    document.getElementById('bord').focus()
    b = 4
})
document.getElementsByClassName('tavan')[0].addEventListener('click',(e)=>{
    a = document.getElementById('bord').value
    document.getElementById('bord').value=''
    document.getElementById('bord').focus()
    b = 5
})
document.getElementsByClassName('darsad')[0].addEventListener('click',(e)=>{
    a = document.getElementById('bord').value
    document.getElementById('bord').value=''
    document.getElementById('bord').focus()
    b = 6
})
document.getElementsByClassName('jazr')[0].addEventListener('click',(e)=>{
    a = document.getElementById('bord').value
    document.getElementById('bord').value=''
    document.getElementById('bord').focus()
    b = 7
})
document.getElementsByClassName('clear')[0].addEventListener('click',(e)=>{
    a = 0
    sum = 0
    b = 0
    c = 0
    document.getElementById('bord').value=''
    document.getElementsByTagName('span')[0].innerHTML=''
    document.getElementById('bord').focus()
})
document.getElementsByClassName('mosavi')[0].addEventListener('click',(e)=>{
    c = document.getElementById('bord').value
    if(b == 1){
        sum = Number(a)+Number(c);
        b=0
    }
    if(b == 2){
        sum = Number(a)-Number(c);
        b=0
    }
    if(b == 3){
        sum = Number(a)*Number(c);
        b=0
    }
    if(b == 4){
        sum = Number(a)/Number(c);
        b=0
    }
    if(b == 5){
        sum = Math.pow(Number(a),Number(c));
        b=0
    }
    if(b == 6){
        sum = ((Number(a)*Number(c))/100)*10;
        b=0
    }
    if(b == 7){
        sum = Math.sqrt(Number(a));  
        b=0
    }
    console.log(sum);
    document.getElementById('bord').value = sum
    document.getElementsByTagName('span')[0].innerHTML=sum
    document.getElementById('bord').focus()
})
num.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        let x = item.innerHTML
        console.log(x);
        document.getElementById('bord').value= document.getElementById('bord').value + x
    })
    item.addEventListener('mousedown',(e)=>{
        item.style.backgroundColor='blue'
    })
    item.addEventListener('mouseup',()=>{
        item.style.backgroundColor="rgb(29, 29, 29)"
    })
})
zar.forEach((val)=>{
    val.addEventListener('mousedown',(e)=>{
        val.style.backgroundColor='greenyellow'
    })
    val.addEventListener('mouseup',()=>{
        val.style.backgroundColor="rgb(29, 29, 29)"
    })
})