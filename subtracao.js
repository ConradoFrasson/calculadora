function subtracao(calculadora, rl, callback) {
    rl.question('Digite o primeiro valor: ', (valor1) => {
        rl.question('Digite o segundo valor: ', (valor2) => {
            let resultado = parseFloat(valor1) - parseFloat(valor2)
            console.log(`Resultado da subtração: ${resultado}`)
            callback()
        })
    })
}
module.exports = {subtracao}