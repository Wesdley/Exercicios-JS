function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')

    if ( fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // faz a conta do anos
        var genero = ''
        var img = document.createElement('img')  //criar o elemento <img> do html
        img.setAttribute('id', 'foto') //cria a id="foto" dentro do elemento <img> do html (Ex no html: <img id="foto">)
        if (fsex[0].checked) {
            //colocando as imagem para cada idade
            genero = '<strong> Homem </strong>'
                if (idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute("src", "bb-mas.jpg") // serve oara chamar a imagem
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'jovem-mas.jpg')
                } else if ( idade < 50) {
                    //adulto
                    img.setAttribute('src', 'adulto-mas.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'velho-mas.jpg')
                }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
                if (idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'bb-fem.jpg')
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'jovem-fem.jpg')
                } else if ( idade < 50) {
                    //adulto
                    img.setAttribute('src', 'adulto-fem.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'velha-fem.jpg')
                }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img) // serve para chamar a img na div res
    }

}