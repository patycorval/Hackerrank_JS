function staircase(n) {
    for (let i=1; i<=n;i++){ // conta a linha que está
        let space = ''
        let hash = ''
        
        for(let k=0; k<n-i; k++){ // qt de espaços
            space += " ";
        }
        
        for (let p=0;p<i;p++){ // qt de #
            hash += "#"
        }
        
     console.log(space + hash)
    }
}