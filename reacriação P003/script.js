function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')

    if ( fano.value.length == 0 || Number(fano.value) > ano) { 
        // esta pegando o valor do ano e comparado, para ver se esta errada
        window.alert('[ERRO NUMERO 300] A data digitada esta errada')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            //se a caixa do masculino tiver marcada
            genero = '<strong> Homem </strong>'
                if ( idade >= 0 && idade < 10 ) {
                    img.setAttribute('src', 'bb-mas.jpg')
                }else if ( idade < 21 ) {
                    img.setAttribute('src', 'jovem-mas.jpg')
                }else if ( idade < 50 ) {
                    img.setAttribute('src', 'adulto-mas.jpg')
                }else {
                    img.setAttribute('src', 'velho-mas.jpg')
                }
        } else if (fsex[1].checked){
            //se a caixa do feminina tiver marcada
            genero = '<strong> Mulher </strong>'
                if ( idade >= 0 && idade < 10 ) {
                    img.setAttribute('src', 'bb-fem.jpg')
                }else if ( idade < 21 ) {
                    img.setAttribute('src', 'jovem-fem.jpg')
                }else if ( idade < 50 ) {
                    img.setAttribute('src', 'adulto-fem.jpg')
                }else {
                    img.setAttribute('src', 'velha-fem.jpg')
                }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}
