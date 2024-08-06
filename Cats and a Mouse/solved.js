function catAndMouse(x, y, z) {
    let absoluto1 = Math.abs(z-x)
    let absoluto2= Math.abs(z-y)
    
    if (absoluto1 < absoluto2){
        return ("Cat A")
    }
    else if (absoluto2<absoluto1){
        return ("Cat B")
    }
    else{
        return ("Mouse C")
    }
}