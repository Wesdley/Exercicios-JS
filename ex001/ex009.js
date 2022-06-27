/* var idade = 788
console.log(`você tem ${idade}`)
if (idade < 16) {
    console.log(`não pode votar!`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional!`)
} else {
    console.log(`Pode votar!`)
}
*/

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}`)

if (hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}