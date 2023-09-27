let nomeHeroi = "Ziriguidum dos hebraicos";
let nivelHeroi = ""
let xpInicial = 500;
let addXp = 0;

 let ganhou = 7;
 let perdeu = 3;


if(ganhou >= perdeu){
     addXp += 100*ganhou
}else{
    addXp -= 50*perdeu
}

let xpTotal= xpInicial + addXp


switch (true){
    
    case (xpTotal <= 1000):
    nivelHeroi = "ferro"
    break

    case (xpTotal >= 1001 && xpTotal <= 2000):
        nivelHeroi = "Bronze"
        break
    
    case (xpTotal >= 2001 && xpTotal <= 5000):
        nivelHeroi = "Prata"
        break

     case (xpTotal >= 5001 && xpTotal <= 7000):
        nivelHeroi = "Ouro"
        break
    case (xpTotal >= 7001 && xpTotal <= 8000):
        nivelHeroi = "Platina"
        break 

    case (xpTotal >= 8001 && xpTotal <= 9000):
        nivelHeroi = "Ascendente"
        break        

    case (xpTotal >= 9001 && xpTotal <= 10000):
        nivelHeroi = "Imortal"
        break    
    
    case (xpTotal >= 10001):
        nivelHeroi = "Radiante"
        break    
    

    default:
        console.log("Sem nivel")

}

console.log(`O heroi de nome ${nomeHeroi} está no nível ${nivelHeroi}`)

