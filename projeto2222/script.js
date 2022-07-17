function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) // transforma em valor 
        let c = 1 // tabuada
        tab.innerHTML= ""
        while ( c <= 10 ){
            let item = document.createElement('option')// createElement serve para criar um elemento, o option e usando dentro da select
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // para outras linguas isso e importante para ter um valor. Agora para o javascript nao tem problema ter ou não.
            tab.appendChild(item) // serve para para adicionar um elemento filho dentro do select
            c++


        }
    }
}