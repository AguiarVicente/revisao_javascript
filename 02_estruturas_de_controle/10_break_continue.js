// break -> swicth - for - while
// continue -> for - while

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

for( let x in nums){
    if ( x == 5 ){
        break;
    }
    console.log(`${x} = ${nums[x]}`)
}

for ( y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
// break com rotulo para o for externo
externo: for ( a in nums ){
    for( b in nums ){
        if(a == 2 && b == 3) {
            break externo
        }
        console.log(`Para = ${a} , ${b}`)
    }
}
console.log('Fim!')