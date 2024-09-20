function BubbleSort(list) {
    let c = 0;
    let inicio = performance.now();  // Pega o tempo no início da execução
    for (let t = 0; t < list.length; t++) { // 1 + 1 + 2n   // Primitivas -> let t = 0 - atribuição, t < list.length -  booleana, t++ - atribuição e aritmética
        c++;
        for (let i in list) { //n(n) 
            let proxI = Number(i) + 1; //n(n)               // Primitivas -> let proxI = Number(i) + 1 - atribuiçao e arimética
            if (list[i] > list[proxI]) { //n(n)             // Primitivas -> list[i] > list[proxI] - booleana
                const valorPerdido = list[proxI]; //n(n)    // Primitivas -> valorPerdido = list[proxI] - atribuiçao
                list[proxI] = list[i]; //n(n)               // Primitivas -> list[proxI] = list[i] - atribuiçao
                list[i] = valorPerdido; //n(n)              // Primitivas ->  list[i] = valorPerdido - atribuiçao
            }
        }
    }
    let fim = performance.now();  // Pega o tempo após a execução
    console.log(fim - inicio + "ml")
    console.log("--------------------")
}
//----------------------------------
// Cálculo de Complexidade Grande O
// 2 + 2n + n2 + n2 + n2 + n2 + n2 + n2 
// 2 + 8n2
// O(n2)
//----------------------------------
// Complexidade de Tempo: O(n^2) - Ambos os loops (externo e interno) executam n vezes, resultando em um total de n^2 operações.

// Complexidade de Espaço: O(1) - O código usa apenas variáveis auxiliares (t, i, proxI, valorPerdido), a quantidade de espaço 
// adicional usado não cresce com o tamanho da entrada.
//----------------------------------
//Exemplos
BubbleSort([5, 4, 3, 2])
BubbleSort([5, 4, 3, 2, 1])
BubbleSort(Array.from({length: 1000}, () => Math.floor(Math.random() * 10000)))
//----------------------------------
