function fibonacci(n) {

    if (n < 2) {
        return n;
    }

    let posicao = 2;
    let anterior = 1;
    let penultimo = 0;

    while (true){

        if (posicao == n) {
            return anterior + penultimo;
        }

        let temp = penultimo;
        penultimo = anterior;
        anterior = temp + penultimo;
        posicao++;

    }
    
}

console.log(fibonacci(6));