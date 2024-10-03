//ESTRUTURA DE REPETIÇÃO
for (let i=0; i<0; i++ ){
    console.log(i)
}
// console.log("hello")

//WHILE
let f = 0;
while(f<10){
    // console.log(f);
    f++;
}

//do while

let w=0;
do{
    // console.log(w);
    w++;
}
while(w<5);

//funções

function Ola(faculdade){
    alert(`Seja bem vindo a ${faculdade}`)
    document.write(`seja bem vindo a ${faculdade}`)
    // console.log(`seja bem vindo a ${faculdade}`)
    
}
Ola("faculdade")

//Arrow Function

const hello=()=>(console.log("função arrow function"))

hello()

//Array [] , Objeto{} e Metodos()

let jogadores = [
    {nome:"Huguinho", idade:17},
    {nome:"Zezinho", idade:19},
    {nome:"Luizinho", idade:19},
]

let listaJogadores = jogadores.map(function(item){
    return item.idade;
})

console.log(listaJogadores)