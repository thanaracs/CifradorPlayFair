const grito = [
    ['g', 'r', 'i', 't', 'o'],
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'h', 'j', 'l', 'm'],
    ['n', 'p', 'q', 's', 'u'],
    ['v', 'w', 'x', 'y', 'z']
]

function cifrador() {
    var palavra = document.getElementById('palavra').value

    //coloca palavra em minusculo
    palavra = palavra.toLowerCase();
    var duplaDeCaracteres = []

    // loop no input
    for (var i = 0; i < palavra.length; i++) {

        // if para verificar se as palavras são duplicadas
        if (palavra[i] == palavra[i + 1]) {
            duplaDeCaracteres.push([palavra[i], 'x'])
        } else if (i + 1 == palavra.length && (palavra.length % 2 != 0)) {
            // console.log("ultima letra?")
            duplaDeCaracteres.push([palavra[i], 'x'])
        } else {
            duplaDeCaracteres.push([palavra[i], palavra[i + 1]])
        }
        i++

    }

    var palavraCifrada = ''
        //loop para percorrer o array de duplas de carecteres
    duplaDeCaracteres.forEach(element => {
        console.log("DENTRO DO FOR EACH", element)
        var retornoMesmaLinha = mesmaLinha(element[0], element[1])
        var retornoMesmaColuna = mesmaColuna(element[0], element[1])
        var retornoQuadrilatero = quadrilatero(element[0], element[1])
        palavraCifrada = palavraCifrada + retornoMesmaLinha + retornoMesmaColuna + retornoQuadrilatero
    });

    console.log("Resultado final cifrado ", palavraCifrada)
    document.getElementById('respostaCifrada').value = palavraCifrada
}

function mesmaLinha(letra1, letra2) {
    var Letra1Linha
    var Letra1Coluna
    var Letra2Linha
    var Letra2Coluna

    //For para pegar as posições no array grito, da primeira letra
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {

            // letra recebe linhas e colunas do array grito
            var letra = grito[linha][coluna]

            // compara a "letra" se é a letra que queremos
            if (letra == letra1) {
                Letra1Linha = linha
                Letra1Coluna = coluna
                    // console.log("primeira letra:", letra)
            }
        }
    }

    //For para pegar as posições no array grito, da segunda letra
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {
            var letra = grito[linha][coluna]
            if (letra == letra2) {
                Letra2Linha = linha
                Letra2Coluna = coluna
                    // console.log("segunda letra:", letra)
            }
        }
    }
    /*REGRA 1 - Letras na mesma linha são substituídas pelas letras à sua direita.
     Caso uma das letras do bigrama esteja na última coluna da grade,
      "roda-se a linha" e utiliza-se a letra da primeira coluna;*/

    if (Letra1Linha == Letra2Linha) {
        var substituiLetra1 = grito[Letra1Linha][Letra1Coluna + 1] == undefined ? grito[Letra1Linha][0] : grito[Letra1Linha][Letra1Coluna + 1]
        var substituiLetra2 = grito[Letra2Linha][Letra2Coluna + 1] == undefined ? grito[Letra2Linha][0] : grito[Letra2Linha][Letra2Coluna + 1]
        return substituiLetra1 + substituiLetra2
    }
    return ''
}

function mesmaColuna(letra1, letra2) {
    var Letra1Linha
    var Letra1Coluna
    var Letra2Linha
    var Letra2Coluna

    //For para pegar as posições no array grito, da primeira letra
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {

            // letra recebe linhas e colunas do array grito
            var letra = grito[linha][coluna]

            // compara a "letra" se é a letra que queremos
            if (letra == letra1) {
                Letra1Linha = linha
                Letra1Coluna = coluna

            }
        }
    }

    //For para pegar as posições no array grito, da segunda letra
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {
            var letra = grito[linha][coluna]
            if (letra == letra2) {
                Letra2Linha = linha
                Letra2Coluna = coluna

            }
        }
    }

    /*REGRA 2 - Letras na mesma coluna são substituídas pelas letras abaixo delas.
     Caso a letra esteja na última linha, "roda-se a coluna" e utiliza-se a letra da primeira linha;*/

    if (Letra1Coluna == Letra2Coluna) {

        var substituiLetra1 = grito[Letra1Linha + 1] == undefined ? grito[0][Letra1Coluna] : grito[Letra1Linha + 1][Letra1Coluna]
        var substituiLetra2 = grito[Letra2Linha + 1] == undefined ? grito[0][Letra2Coluna] : grito[Letra2Linha + 1][Letra2Coluna]
        return substituiLetra1 + substituiLetra2
    }
    return ''
}

function quadrilatero(letra1, letra2) {
    var Letra1Linha
    var Letra1Coluna
    var Letra2Linha
    var Letra2Coluna

    //For para pegar as posições no array grito, da primeira letra
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {

            // letra recebe linhas e colunas do array grito
            var letra = grito[linha][coluna]

            // compara a "letra" se é a letra que queremos
            if (letra == letra1) {
                Letra1Linha = linha
                Letra1Coluna = coluna

            }
        }
    }

    //For para pegar as posições no array grito, da segunda letra
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {
            var letra = grito[linha][coluna]
            if (letra == letra2) {
                Letra2Linha = linha
                Letra2Coluna = coluna

            }
        }
    }

    //  validar para descobrir se é quadrilatero
    /*Letras em linhas e colunas diferentes: as letras do bigrama formam um "quadrilátero" 
    e são substituídas pelas letras posicionadas nos cantos contrários do quadrilátero.*/

    if (Letra1Coluna != Letra2Coluna && Letra1Linha != Letra2Linha) {

        var substituiLetra1 = grito[Letra1Linha][Letra2Coluna]
        var substituiLetra2 = grito[Letra2Linha][Letra1Coluna]
        return substituiLetra1 + substituiLetra2

    }

    return ''
}

// DESCIFRADOR

function descifrador() {
    var palavra = document.getElementById('palavra').value

    //coloca palavra em minusculo
    palavra = palavra.toLowerCase();
    var duplaDeCaracteres = []

    // loop no input
    for (var i = 0; i < palavra.length; i++) {

        // if para verificar se as palavras são duplicadas
        if (palavra[i] == palavra[i + 1]) {
            duplaDeCaracteres.push([palavra[i], 'x'])
        } else if (i + 1 == palavra.length && (palavra.length % 2 != 0)) {
            // console.log("ultima letra?")
            duplaDeCaracteres.push([palavra[i], 'x'])
        } else {
            duplaDeCaracteres.push([palavra[i], palavra[i + 1]])
        }
        i++

    }

    var palavraCifrada = ''
        //loop para percorrer o array de duplas de carecteres
    duplaDeCaracteres.forEach(element => {
        console.log("DENTRO DO FOR EACH", element)
        var retornoMesmaLinha = mesmaLinhaDescifrar(element[0], element[1])
        var retornoMesmaColuna = mesmaColunaDescifrar(element[0], element[1])
        var retornoQuadrilatero = quadrilateroDescifrar(element[0], element[1])
        palavraCifrada = palavraCifrada + retornoMesmaLinha + retornoMesmaColuna + retornoQuadrilatero
    });

    console.log("Resultado final cifrado ", palavraCifrada)
    document.getElementById('respostaCifrada').value = palavraCifrada
}

function mesmaLinhaDescifrar(letra1, letra2) {
    var Letra1Linha
    var Letra1Coluna
    var Letra2Linha
    var Letra2Coluna

    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {

            var letra = grito[linha][coluna]

            if (letra == letra1) {
                Letra1Linha = linha
                Letra1Coluna = coluna
            }
        }
    }

    //For para pegar as posições no array grito, da segunda letra
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {
            var letra = grito[linha][coluna]
            if (letra == letra2) {
                Letra2Linha = linha
                Letra2Coluna = coluna
                    // console.log("segunda letra:", letra)
            }
        }
    }
    /*REGRA 1 - Letras na mesma linha são substituídas pelas letras à sua direita.
     Caso uma das letras do bigrama esteja na última coluna da grade,
      "roda-se a linha" e utiliza-se a letra da primeira coluna;*/

    if (Letra1Linha == Letra2Linha) {
        var substituiLetra1 = grito[Letra1Linha][Letra1Coluna - 1] == undefined ? grito[Letra1Linha][4] : grito[Letra1Linha][Letra1Coluna - 1]
        var substituiLetra2 = grito[Letra2Linha][Letra2Coluna - 1] == undefined ? grito[Letra2Linha][4] : grito[Letra2Linha][Letra2Coluna - 1]
        return substituiLetra1 + substituiLetra2
    }
    return ''
}

function mesmaColunaDescifrar(letra1, letra2) {
    var Letra1Linha
    var Letra1Coluna
    var Letra2Linha
    var Letra2Coluna

    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {

            var letra = grito[linha][coluna]


            if (letra == letra1) {
                Letra1Linha = linha
                Letra1Coluna = coluna

            }
        }
    }
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {
            var letra = grito[linha][coluna]
            if (letra == letra2) {
                Letra2Linha = linha
                Letra2Coluna = coluna

            }
        }
    }
    /*REGRA 2 - Letras na mesma coluna são substituídas pelas letras abaixo delas.
     Caso a letra esteja na última linha, "roda-se a coluna" e utiliza-se a letra da primeira linha;*/

    if (Letra1Coluna == Letra2Coluna) {

        var substituiLetra1 = grito[Letra1Linha - 1] == undefined ? grito[4][Letra1Coluna] : grito[Letra1Linha - 1][Letra1Coluna]
        var substituiLetra2 = grito[Letra2Linha - 1] == undefined ? grito[4][Letra2Coluna] : grito[Letra2Linha - 1][Letra2Coluna]
        return substituiLetra1 + substituiLetra2
    }
    return ''
}

function quadrilateroDescifrar(letra1, letra2) {
    var Letra1Linha
    var Letra1Coluna
    var Letra2Linha
    var Letra2Coluna

    //For para pegar as posições no array grito, da primeira letra
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {

            // letra recebe linhas e colunas do array grito
            var letra = grito[linha][coluna]

            // compara a "letra" se é a letra que queremos
            if (letra == letra1) {
                Letra1Linha = linha
                Letra1Coluna = coluna

            }
        }
    }

    //For para pegar as posições no array grito, da segunda letra
    for (let linha = 0; linha < grito.length; linha++) {
        for (let coluna = 0; coluna < grito.length; coluna++) {
            var letra = grito[linha][coluna]
            if (letra == letra2) {
                Letra2Linha = linha
                Letra2Coluna = coluna

            }
        }
    }

    //  validar para descobrir se é quadrilatero
    /*Letras em linhas e colunas diferentes: as letras do bigrama formam um "quadrilátero" 
    e são substituídas pelas letras posicionadas nos cantos contrários do quadrilátero.*/

    if (Letra1Coluna != Letra2Coluna && Letra1Linha != Letra2Linha) {

        var substituiLetra1 = grito[Letra1Linha][Letra2Coluna]
        var substituiLetra2 = grito[Letra2Linha][Letra1Coluna]
        return substituiLetra1 + substituiLetra2

    }

    return ''
}