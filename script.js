// pegar os elementos do HTML via DOM
let soma = document.getElementById('soma');
let subtracao = document.getElementById('subtracao');
let subtracao2 = document.getElementById('subtracao2');
let divisao = document.getElementById('divisao');
let divisao2 = document.getElementById('divisao2');
let potencia = document.getElementById('potencia');
let potencia2= document.getElementById('potencia2');
let fatorial = document.getElementById('fatorial');
let fatorial2 = document.getElementById('fatorial2');
let multiplicacao = document.getElementById('multiplicacao');
let raizQuadrada = document.getElementById('raizQuadrada');
let raizQuadrada2 = document.getElementById('raizQuadrada2');
let porcentagem = document.getElementById('porcentagem');
let porcentagem2 = document.getElementById('porcentagem2');
let media = document.getElementById('media');

soma.innerHTML =0;
multiplicacao.innerHTML =0;
raizQuadrada.innerHTML =0;
subtracao.innerHTML =0;
subtracao2.innerHTML =0;
divisao.innerHTML =0;
divisao2.innerHTML =0;
potencia.innerHTML =0;
potencia2.innerHTML =0;
fatorial.innerHTML =0;
fatorial2.innerHTML =0;
porcentagem.innerHTML =0;
porcentagem2.innerHTML =0;
media.innerHTML =0;

/// funções com os cálculos
function calcularSoma(a, b){
    return a + b;
};
function calcularMultiplicacao(a,b){
    return a * b;
};

function calcularSubtracao(a,b){
    return a - b;
};

function calcularSubtracao2(a,b){
    return b-a;
};

function calcularDivisao(a,b){
    return (a / b).toFixed(2);

};

function calcularDivisao2(a,b){
    return (b / a).toFixed(2);
};

function calcularPotencia(a,b){
    return (a ** b);
};

function calcularPotencia2(a,b){
    return (b ** a);
};

function calcularFatorial(a){
    var soma = 1;
    if(Number.isInteger(a) == true){
        while(a>0){
            soma = soma * a;
            a--;

        }
        return soma;
    };
    
    };

function calcularFatorial2(b){
    var soma = 1;
    if(Number.isInteger(b) == true){
        while(b>0){
            soma = soma * b;
            b--;

        };
        return soma;
    };
   
 };


function calcularPorcentagem(a,b){
    porcentagem= a/b *100 ;
    return porcentagem .toFixed(0) + '%';

};

function calcularPorcentagem2(a,b){
    porcentagem2= b/a *100 ;
    return porcentagem2 .toFixed(0) + '%';
};

function calcularMedia(a,b){
    media= (a+b)/2;
    return media;
   
};

const calcularRaizQuadrada = (a) => Math.sqrt(a).toFixed(2);
const calcularRaizQuadrada2 = (b) => Math.sqrt(b).toFixed(2);

// fazer a função calcular para exibir os resultados
const calcular  = () => {
    let inputA = document.getElementById('primeiroNumero').value;
    let inputB = document.getElementById('segundoNumero').value;
    let a = parseFloat(inputA);
    let b = parseFloat(inputB);
    
    soma.innerHTML=calcularSoma(a,b);
    multiplicacao.innerHTML= calcularMultiplicacao(a,b);
    raizQuadrada.innerHTML=calcularRaizQuadrada(a);
    raizQuadrada2.innerHTML=calcularRaizQuadrada2(b);
    subtracao.innerHTML=calcularSubtracao(a,b);
    subtracao2.innerHTML=calcularSubtracao2(a,b);
    divisao.innerHTML=calcularDivisao(a,b);
    divisao2.innerHTML=calcularDivisao2(a,b);
    potencia.innerHTML=calcularPotencia(a,b);
    potencia2.innerHTML=calcularPotencia2(a,b);
    fatorial.innerHTML=calcularFatorial(a);
    fatorial2.innerHTML=calcularFatorial2(b);
    porcentagem.innerHTML=calcularPorcentagem(a,b);
    porcentagem2.innerHTML=calcularPorcentagem2(a,b);
    media.innerHTML=calcularMedia(a,b);
};
