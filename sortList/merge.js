function mergeSort(array) {
    // Verifica se só tem um elemento na lista e retorna ele
    if (array.length <= 1) {
        return array; // O(1) -> Executado 1 vez
    }

    // Dividir o array no meio
    const indexDoMeio = Math.floor(array.length / 2); // O(1) -> Atribuição, divisão e chamada de função (Math.floor)
    const esquerdaDoArray = array.slice(0, indexDoMeio); // O(n/2) -> Slice percorre n/2 elementos
    const direitaDoArray = array.slice(indexDoMeio); // O(n/2) -> Slice percorre n/2 elementos

    // Chamada recursiva
    const sortedEsquerda = mergeSort(esquerdaDoArray); // O(n log n) -> Chamada recursiva
    const sortedDireita = mergeSort(direitaDoArray); // O(n log n) -> Chamada recursiva

    return merge(sortedEsquerda, sortedDireita); // O(n) -> Chama a função merge
}

// Função para juntar os arrays
function merge(esquerdaDoArray, direitaDoArray) {
    let resultado = []; // O(1) -> Atribuição simples
    let indexEsquerda = 0; // O(1) -> Atribuição simples
    let indexDireita = 0; // O(1) -> Atribuição simples

    // Comparar e ordenar
    while (indexEsquerda < esquerdaDoArray.length && indexDireita < direitaDoArray.length) { // O(n) -> Executado n vezes no total
        if (esquerdaDoArray[indexEsquerda] < direitaDoArray[indexDireita]) { // O(n) -> Comparação
            resultado.push(esquerdaDoArray[indexEsquerda]); // O(1) -> Inserção no array
            indexEsquerda++; // O(1) -> Incremento
        } else {
            resultado.push(direitaDoArray[indexDireita]); // O(1) -> Inserção no array
            indexDireita++; // O(1) -> Incremento
        }
    }

    // Adicionar os elementos restantes
    return resultado
        .concat(esquerdaDoArray.slice(indexEsquerda)) // O(n/2) -> Concatenação e slice
        .concat(direitaDoArray.slice(indexDireita)); // O(n/2) -> Concatenação e slice
}

// Função para testar o mergeSort e medir a performance
function testarMergeSort(array) {
    let inicio = performance.now();  // O(1) -> Medição de tempo
    const arrayArrumado = mergeSort(array); // O(n log n) -> Chamada da função principal
    let fim = performance.now();     // O(1) -> Medição de tempo
    console.log("Array arrumado: ", arrayArrumado);
    console.log(`Tempo em ms para ordenar: ${fim - inicio}`);
    console.log("--------------------");
}

// Testes com arrays de diferentes tamanhos
testarMergeSort([12, 6, 4, 8, 2, 42, 29, 11]);
testarMergeSort([5, 4, 3, 2]);
testarMergeSort([5, 4, 3, 2, 1]);
//testarMergeSort(Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000)));
