function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var s = window.document.getElementById('saudacao')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 9

    msg.innerHTML = `Agora são${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src='img/manha.jpg'
        document.body.style.background = '#A88C4F'
        s.innerHTML=`Bom Dia!`
        //dia
    }else if(hora >= 12 && hora < 18){
        img.src='img/tarde.jpg'
        document.body.style.background = '#FCAE3F'
        s.innerHTML=`Boa Tarde!`
        //tarde
    }else{
        img.src='img/noite.jpg'
        document.body.style.background = '#324E61'
        s.innerHTML=`Boa Noite`
        //noite
    }
}
