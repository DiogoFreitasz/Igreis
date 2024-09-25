function BubbleSort(list) {
    let c = 0; // 1                                         // Primitivas -> let c = 0 - atribuição
    let inicio = performance.now(); // 1                    // Primitivas -> let inicio = perfomace.now() - atribuição
    let teste = true; // 1

    while(teste){ // n
        teste = false; // 1                                 // Primitivas -> teste = false -> atribuição
        for (let i in list) { //n(n) 
            c++; // n(1n)
            let proxI = Number(i) + 1; //n(1n)               // Primitivas -> let proxI = Number(i) + 1 - atribuiçao e arimética
            if (list[i] > list[proxI]) { //n(1n)             // Primitivas -> list[i] > list[proxI] - booleana
                const valorPerdido = list[proxI]; //n(1n)    // Primitivas -> valorPerdido = list[proxI] - atribuiçao
                list[proxI] = list[i]; //n(1n)               // Primitivas -> list[proxI] = list[i] - atribuiçao
                list[i] = valorPerdido; //n(1n)              // Primitivas ->  list[i] = valorPerdido - atribuiçao
                teste = true; // n(1n)                       // Primitivas -> teste = true -> atribuição
            }
        }
    }
    let fim = performance.now(); // 1                        // Primitivas -> let inicio = perfomace.now() - atribuição
    console.log(`Lista ordenada: ${list}`) 
    console.log("Tempo em ms: " + (fim - inicio)) 
    console.log(c)
    console.log("--------------------") 
}
//----------------------------------
// Cálculo de Complexidade Grande O
// 1 + 1 + 1 + 1 + 1 + 8n²
// 5 + 8n²
// O(n²) -> as constantes são desconsideradas, restando apenas o com maior índice
//----------------------------------
// Complexidade de Tempo: O(n^2) - Ambos os loops (externo e interno) executam n vezes, resultando em um total de n^2 operações.

// Complexidade de Espaço: O(1) - O código usa apenas variáveis auxiliares (t, i, proxI, valorPerdido), a quantidade de espaço *
// adicional usado não cresce com o tamanho da entrada.
//----------------------------------
//Exemplos
BubbleSort([5, 4, 3, 2])
BubbleSort([5, 4, 3, 2, 1])
BubbleSort([3, 5, 1, 2, 4])
//BubbleSort(Array.from({length: 1000}, () => Math.floor(Math.random() * 10000)))
//Comparando os exemplos, o tempo cresce quadraticamente conforme a entrada de dados cresce
//----------------------------------
