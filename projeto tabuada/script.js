function calcular() {
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')
    
    if (num.value.length == "") {
        res.innerHTML = `Coloque um valor valido`
    } else {
        let n = Number(num.value)
        let x = 0
        for ( x + 1 ; x <= 5; x++) {
            let resultado = n * x
            res.innerHTML = `${n} x ${x} = ${resultado}`
        }
    }
    
}