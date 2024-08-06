function diagonalDifference(arr) {
    
    let aux=0;
    let aux2=0;
    let sub=0;
    
    for(let i=0; i<arr.length; i++){ 
        aux+= arr[i][i]; 
    }
    
    for(let i=arr.length-1; i>=0; i--){
            aux2+= arr[arr.length - i - 1][i];
        }

    sub= Math.abs(aux - aux2);

    return sub ;
}