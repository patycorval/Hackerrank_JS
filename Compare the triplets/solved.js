function compareTriplets(a, b) {

    let aux=[0,0];
    
    for(let i=0; i<3;i++){
        if (a[i]>b[i]){
            aux[0]+=1;
        }
        if(a[i]<b[i]){
            aux[1]+=1;
        }
    }
    return aux;
}