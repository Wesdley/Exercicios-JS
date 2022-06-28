function carregar() {
    var img = document.getElementById('img')
    var text = document.getElementById('text')
    var data = new Date()
    var hora = 20//data.getHours()
    var minutos = 9//data.getMinutes()

    text.innerHTML = `Agora são ${hora}:${minutos} !`

    if ( data < 10 ) {
        minutos = "0" + minutos
    }

    if ( data >= 5 && data <= 12) {
        //BOM DIA!
        img.src = 'img/manha.jpg'
        document.body.style.background = 'red'
    } else if ( data > 12 && data <= 18 ) {
        //BOM TARDE
        img.src = 'img/dia.jpg'
        document.body.style.background = 'black'
    } else {
        //NOITE
        img.src = 'img/noite.jpg'
        document.body.style.background = '#898989'
    }
}