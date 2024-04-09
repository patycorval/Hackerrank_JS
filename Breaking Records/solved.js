function breakingRecords(scores) {
    
    let max=scores[0];
    let min=scores[0];
    let breakmax=0;
    let breakmin=0;
    
   for (let i=0; i<scores.length;i++){
       if (scores[i]>max){
           max = scores[i];
           breakmax ++;
       }
       if (scores[i]<min){
           min =scores[i];
           breakmin ++;
       }
   }
   
   return [breakmax, breakmin];
}