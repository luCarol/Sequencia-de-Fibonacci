function fibonacci(n) {

    if (n < 2) {
        return n;
    }

    let anterior = 1;
    let penultimo = 0;

    for (let i = 2; i <= n; i++) {

        if (i == n) {
            return anterior + penultimo;
        }

        let temp = penultimo;
        penultimo = anterior;
        anterior = temp + penultimo;

    }

}

console.log(fibonacci(6));