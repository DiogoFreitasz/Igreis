let c = 0;
function BubbleSort(list) {
    let tem = true;
    let inicio = performance.now();
    while (tem) {
        c++;
            tem = false;
            for (let i in list) { //n(n) 
                let proxI = Number(i) + 1; //n(n)               
                if (list[i] > list[proxI]) { //n(n)    
                    tem = true;
                    const valorPerdido = list[proxI]; //n(n)   
                    list[proxI] = list[i]; //n(n)               
                    list[i] = valorPerdido; //n(n)              
                } 
                if(!tem)break
            }


    }
    let fim = performance.now();
    console.log(fim - inicio + "ms")
    console.log(c)
    console.log(list)
}

BubbleSort([6, 2, 5])