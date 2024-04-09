//Implemente uma função que receba uma lista de alunos de ISW-008 (nome, ra, notaP1, notaP2).
//Exemplo: {nome: "Diego", ra: "005832311004", notaP1: 10, notaP2: 8}.
//Essa função deverá:
//a) Mostrar na tela os alunos em uma tabela.
//b) Notas menores que 6 em vermelho, maiores ou iguais em azul.
//c) A média da P1 da turma.
//d) A média da P2 da turma.
//e) A média de cada aluno.
//f) A quantidade de aprovados.
//g) A quantidade de reprovados.
//Obs: Para teste colocar de 5-10 alunos.

// function mediaP1(listaAlunos){
//     for (let i=0; i<listaAlunos.length;i++){
//         var mediaP1 =+ listaAlunos[i].p1;
//         var aux = (mediaP1 / listaAlunos.length);
//     }
//     return aux;
// }


function tabelaAlunos(listaAlunos){

    var acumulado= "<table> <thead> <tr>" 
                +  "<th> Nome </th>"
                +  "<th> RA </th>"
                + "<th> Nota P1 </th>"
                + "<th> Nota P2 </th>"
                +  "<th> Média individual </th>"
                + "<th> Resultado </th>"
                +  "</tr>"
                +  "</thead>"
                +  "<tbody>"
     for (let i=0; i<listaAlunos.length;i++){
         acumulado = acumulado 
         + "<tr> <td>" + listaAlunos[i].nome + "</td>"
         + "<td>" + listaAlunos[i].ra + "</td>"
         + "<td class='notap1'>" + listaAlunos[i].p1.toFixed(2) + "</td>"
         + "<td class='notap2'>" + listaAlunos[i].p2.toFixed(2) + "</td>"

         //MEDIA INDIVUDUAL
         + "<td class='media'>" +((listaAlunos[i].p1+listaAlunos[i].p2)/2).toFixed(2) + "</td>"

         //EXIBIR APROVADO OU REPROVADO
         let aprovado=0;
         let reprovado=0;
         if (((listaAlunos[i].p1+listaAlunos[i].p2)/2)>=6){
            acumulado = acumulado 
            + "<td style='background-color:#4d4dff'> Aprovado </td>"
         }

         else{
            acumulado = acumulado 
            + "<td style= 'background-color:#f32b2b'> Reprovado </td>"
         }

      acumulado = acumulado +"</tr>"   
}

    // MEDIA DA TURMA NA P1 E P2
    let mediaP1=0;
    let mediaP2=0;
     for (let i=0; i<listaAlunos.length;i++){
        mediaP1+= listaAlunos[i].p1;
        mediaP2+= listaAlunos[i].p2;
    }
    mediaP1= mediaP1 / listaAlunos.length;
    mediaP2= mediaP2 / listaAlunos.length;

    //QUANTIDADE APROVADOS E REPROVADOS
    let aprovado=0;
    let reprovado=0;
    for (let i=0; i<listaAlunos.length;i++){
        if (((listaAlunos[i].p1+listaAlunos[i].p2)/2)>=6 ){
            aprovado++ ;
        }
        else{
            reprovado ++;
        }
 }

    acumulado = acumulado + "<tr>"
                        + "<td colspan=1 class='destaque'> Média P1 da turma: </td>"
                        + "<td class='mediaT'>" + mediaP1.toFixed(2) + "</td>"
                        + "<td colspan=2  class='destaque'> Média P2 da turma: </td>"
                        + "<td class='mediaT'>" + mediaP2.toFixed(2) + "</td> </tr>"
                        + "<tr> <td  class='destaque'> Qtd aprovados: </td>"
                        + "<td>" + aprovado + "</td>"
                        + "<td colspan=2  class='destaque'> Qtd reprovados: </td>"
                        + "<td>" + reprovado + "</td>"
                        + "</tr>"

     acumulado = acumulado + "</tbody> </table>";
     document.write(acumulado); 

     let cor= document.querySelectorAll('td.notap1, td.notap2, td.media,td.mediaT')
    
     for (let i=0; i<cor.length;i++){
        if (parseInt(cor[i].innerText, 10) <6 ){
            cor[i].classList.add("vermelho");
        }
        else{
            cor[i].classList.add("azul");
        }
     }
}