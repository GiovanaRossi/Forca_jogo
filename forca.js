let tentativas = 6;
let lista = [];
let Categoria;
let Random;

const palavras = [
    palavra1 = {
        nome: "LEOPARDO",
        categoria: "ANIMAL"
    },
    palavra2 = {
        nome: "RINOCERONTE",
        categoria: "ANIMAL"
    },
    palavra3 = {
        nome: "ADDAX",
        categoria: "ANIMAL"
    },
    palavra4 = {
        nome: "JAPAO",
        categoria: "PAÍSES"
    },
    palavra5 = {
        nome: "CANADA",
        categoria: "PAÍSES"
    },
    palavra6 = {
        nome: "BUTAO",
        categoria: "PAÍSES"
    },
    palavra7 = {
        nome: "PARALELEPÍPEDO",
        categoria: "OBJETOS"
    },
    palavra8 = {
        nome: "ÓCULOS",
        categoria: "OBJETOS"
    },
    palavra9 = {
        nome: "MODEM",
        categoria: "OBJETOS"
    },
    palavra10 = {
        nome: "JUMANJI",
        categoria: "FILMES"
    },
    palavra11 = {
        nome: "RAMBO",
        categoria: "FILMES"
    },
    palavra12 = {
        nome: "OPERAÇÃO ANTHROPOID",
        categoria: "FILMES"
    },
    palavra13 = {
        nome: "ZADOCK",
        categoria: "NOMES"
    },
    palavra14 = {
        nome: "AZIEL",
        categoria: "NOMES"
    },
    palavra15 = {
        nome: "ROWAN",
        categoria: "NOMES"
    }
];

criarPalavra();
function criarPalavra(){
    const indexPalavras = parseInt(Math.random()* palavras.length)

    Categoria = palavras[indexPalavras].categoria;
    Random = palavras[indexPalavras].nome;
    console.log(Categoria)
    console.log(Random)
}

montar();
function montar(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = Categoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    console.log(Random)
    for(i = 0; i < Random.length; i++){
        if (lista[i] == undefined){
            if (Random[i] == " "){
                lista[i]=" ";
                palavraTela.innerHTML =  palavraTela.innerHTML + "<div class= 'letrasEspaco'>" + lista[i] + "</div>"
            }
            else{
                lista[i] = "&nbsp;"
                palavraTela.innerHTML =  palavraTela.innerHTML + "<div class= 'letras'>" + lista[i] + "</div>"
            }

            
        }
        else{
            
            if (Random[i] == " "){
                lista[i]=" ";
                palavraTela.innerHTML =  palavraTela.innerHTML + "<div class= 'letrasEspaco'>" + lista[i] + "</div>"
            }
            else{
                palavraTela.innerHTML =  palavraTela.innerHTML + "<div class= 'letras'>" + lista[i] + "</div>"
            }
            console.log(lista)
        }
    }
}

function verificaLetra(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montar();

    }
    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#1E90FF";
    document.getElementById(tecla).style.color = "#ffffff";

}

function comparalistas(letra){
    const pos = Random.indeOf(letra);
    if(pos < 0){
        tentativas--
        imgForca();

        if(tentativas == 0){
            abreModal("Você Perdeu!!", "A morte está rindo da sua cara 🤣... A palavra era <br>" + Random);
        }
    }
    else{
        for( i = 0; i < Random.length; i++){
            if(Random[i] == letra){
                lista[i] = letra;
            }
        }
    }

    let win = true;
    for(i = 0; i < Random.length; i++){
        if(Random[i] != lista[i]){
            win = false; 
        }
    }
    if(win == true){
        abreModal("PARABÉNS!!!", " Você não é burro!!!");
        tentativas = 0;
    }
}

function imgForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;

    }
}
    function abreModal( titulo, mensagem){
        let modalTitulo = document.getElementById("exampleModalLabel");
        modalTitulo.innerText = titulo;
    
        let modalBody = document.getElementById("modalBody");
        modalBody.innerHTML = mensagem;

        $("#myModal").modal({
        show : true
        });
    
    }
    let btnReiniciar = document.querySelector("#btnReiniciar");
    btnReiniciar.addEventListener("click", function(){
    location.reload();
    });
    
