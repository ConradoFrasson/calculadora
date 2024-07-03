function multiplicacao(calculadora, rl, callback) {
    rl.question('Digite o primeiro número: ', (valor1) => {
        rl.question('Digite o segundo número: ', (valor2) => {
           let resultado = parseFloat(valor1) * parseFloat(valor2)
                console.log(`Resultado da multiplicação:${resultado}`)
                callback()
            })
        })  
    }


module.exports = {multiplicacao}