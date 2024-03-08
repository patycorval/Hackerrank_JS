function bonAppetit(bill, k, b) {
 
    let aux=0;
    let aux2=0;
    for(let i=0; i<bill.length;i++){
        if (i!==k){
            aux+=bill[i];
        }
    }
    let total=aux/2;
    
    if (b!=total){
        aux2= b-total;
        console.log(aux2);
    }
    else{
        console.log ("Bon Appetit");
    }
}