//Forma 1
function obterEmenta() {
    let ementa = document.querySelectorAll('h4+p:nth-of-type(2n)');
    let conteudos = [];

    for (let i = 0; i < ementa.length; i++) {
        conteudos.push(ementa[i].innerHTML.trim());
    }

    return conteudos;
}

//Forma 2
function obterEmenta() {
    let ementa = document.querySelectorAll('h4+p');
    let impares = [];

    for (let i = 0; i < ementa.length; i ++) {
        if(i % 2 != 0){
        impares.push(ementa[i].textContent.trim());}
    }

    return impares;
}

//Forma 3
function obterEmenta() {     
    let ementa = document.querySelectorAll("h4+p:nth-of-type(2n)");     

    for(let i=0; i<ementa.length; i++){         
          console.log(ementa[i].innerText);     
    }
}

