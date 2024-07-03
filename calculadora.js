const readline =require ('readline')
const adição = require('./soma')
const subtrair = require('./subtracao')
const multiplicar = require('./multiplicacao')
const dividir = require('./divisao')
const porcentar = require('./porcentagem')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let calculadora = []
exibirMenu()
function exibirMenu() {
    console.log(`
    ===Bem-Vindo a sua Calculadora ===
    Qual Função você deseja usar:
    + (soma)
    - (subtração)
    * (multiplicação)
    / (divisão)
    % (porcentagem)
    ! sair
    `);
    
    rl.question('Escolha uma Opção', (opcao) => {
        switch (opcao) {
            case '+':
                adição.soma(calculadora, rl, exibirMenu)
                break
            case '-':
                subtrair.subtracao(calculadora, rl, exibirMenu)
                break
            case '*':
                multiplicar.multiplicacao(calculadora, rl, exibirMenu)
                break
            case '/':
               dividir.divisao(calculadora, rl, exibirMenu)
                break
            case '%':
                 porcentar.porcentagem(calculadora, rl, exibirMenu)
                 break
            case '!':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.');
                exibirMenu()
                break
        }
    })
}