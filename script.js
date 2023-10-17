function contar() {
    let inicio = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    let resultado = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltou algum dado!')
        resultado.innerHTML = 'Impossivel contar!'
    } else {
       resultado.innerHTML = 'Contagem: <br>'
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0) {
        window.alert('Passo inválido! Considerando a partir do PASSO 1!')
       }
        if (i < f) {
            // contagem crsende
            for(let c = i; c <= f; c +=p) {
                resultado.innerHTML += `${c} \u{1F449}`
               }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}