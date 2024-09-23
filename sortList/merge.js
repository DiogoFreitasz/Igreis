function mergeSort(array) {
    // Verifica se só tem um elemento na lista e retorna ele
    if (array.length <= 1) {
        return array; // 1 -> primitiva: condicional
    }

    // Dividir o array no meio
    const indexDoMeio = Math.floor(array.length / 2); // 1 + 1 + 1 -> primitiva: atribuição, divisão, e Math.floor (arimética)
    const esquerdaDoArray = array.slice(0, indexDoMeio); // 1 + n/2 -> primitiva: slice, atribuição
    const direitaDoArray = array.slice(indexDoMeio); // 1 + n/2 -> primitiva: slice, atribuição

    // Chamada recursiva
    const sortedEsquerda = mergeSort(esquerdaDoArray); // Recursivo: O(n log n)
    const sortedDireita = mergeSort(direitaDoArray); // Recursivo: O(n log n)

    return merge(sortedEsquerda, sortedDireita); // 1 -> primitiva: chamada de função
}

//Função para juntar os arrays
function merge(esquerdaDoArray, direitaDoArray) {
    let resultado = []; // 1 -> primitiva: atribuição
    let indexEsquerda = 0; // 1 -> primitiva: atribuição
    let indexDireita = 0; // 1 -> primitiva: atribuição

    // Comparar e ordenar
    while (indexEsquerda < esquerdaDoArray.length && indexDireita < direitaDoArray.length) { // n -> condicional booleana
        if (esquerdaDoArray[indexEsquerda] < direitaDoArray[indexDireita]) { // n -> condicional booleana
            resultado.push(esquerdaDoArray[indexEsquerda]); // n -> primitiva: inserção no array
            indexEsquerda++; // n -> primitiva: incremento
        } else {
            resultado.push(direitaDoArray[indexDireita]); // n -> primitiva: inserção no array
            indexDireita++; // n -> primitiva: incremento
        }
    }

    // Adicionar os elementos restantes
    return resultado
        .concat(esquerdaDoArray.slice(indexEsquerda)) // 1 + n/2 -> primitiva: concatenação
        .concat(direitaDoArray.slice(indexDireita)); // 1 + n/2 -> primitiva: concatenação
}


// Função para testar o mergeSort e medir a performance
function testarMergeSort(array) {
    console.log("Testando array: ", array);
    let inicio = performance.now();  // Começa a medir o tempo
    const arrayArrumado = mergeSort(array);
    let fim = performance.now();     // Finaliza a medição
    console.log("Array arrumado: ", arrayArrumado);
    console.log(`Tempo em ms para ordenar: ${fim - inicio}`);
    console.log("--------------------");
}

// Teste 0
testarMergeSort([12, 6, 4, 8, 2, 42, 29, 11]);

// Teste 1
testarMergeSort([5, 4, 3, 2]);

// Teste 2
testarMergeSort([5, 4, 3, 2, 1]);

// Teste 3 - Array grande (1000 elementos aleatórios entre 0 e 9999)
testarMergeSort(Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000)));
