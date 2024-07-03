function porcentagem(calculadora, rl, callback) {
    rl.question('Digite o primeiro número: ', (valor1) => {
        rl.question('Digite o segundo número: ', (valor2) => {
           let resultado = (parseFloat(valor1) * parseFloat(valor2))/100
                console.log(`Resultado da porcentagem:${resultado}`)
                callback()
            })
        })  
    }


module.exports = {porcentagem}