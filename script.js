var botao = document.getElementById('clicar')
var lampada = document.getElementById('lampada')
botao.onclick = function() {
    if (botao.value === 'Ligar') {
        lampada.src = './assets/lampadaon.png'
        botao.value ='Desligar'
        botao.innerHTML = 'Desligar'
       
    } else {
        lampada.src = './assets/lampadaoff.png'
        botao.value ='Ligar'
        botao.innerHTML = 'Ligar'
    }
}