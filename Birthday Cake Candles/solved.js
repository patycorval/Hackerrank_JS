function birthdayCakeCandles(candles) {
     
    let aux= 0;
    let count=0;
    
    for(let i=0;i<candles.length;i++){
        if (candles[i]>aux){
            aux=candles[i];
            count=1;
        }
        else if (candles [i]== aux){
            count++;
        }
    }
    return count;
}
