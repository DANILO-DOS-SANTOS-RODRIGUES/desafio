let nomeHeroi = "Ziriguidum dos hebraicos";
let nivelHeroi = nivel;
let xpInicial = 0;
let addXp = 0;

 let ganhou = 3;
 let perdeu = 7;

let Md10 = ganhou - perdeu;

if(ganhou >= perdeu){
     addXp += 100*ganhou
}else{
    addXp -= 50*perdeu
}

let xpTotal= xpInicial + addXp


/* vai usar a xpTotal para definir o nivel do heroi, vou pegar o que der no xpTotal colocar 
em uma estrutura de repetição para verificar provavelmente essa estrutura de repetição vai ser o while 
que vai ver o tando de xp que o personagem tem e definir o nivel 
*/

console.log(addXp)

