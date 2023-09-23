let nome_heroi = 'Ozymandias'
let xp_heroi = 15000
let nivel_heroi = ''

// VERIFICANDO O NIVEL 
if (xp_heroi < 1000){nivel_heroi = 'Ferro'}
if (xp_heroi > 1001 && xp_heroi <2000){nivel_heroi = 'Bronze'}
if (xp_heroi > 2001 && xp_heroi <5000){nivel_heroi = 'Prata'}
if (xp_heroi > 6001 && xp_heroi <7000){nivel_heroi = 'Ouro'}
if (xp_heroi > 7001 && xp_heroi <8000){nivel_heroi = 'Platina'}
if (xp_heroi > 8001 && xp_heroi <9000){nivel_heroi = 'Ascentende'}
if (xp_heroi > 9001 && xp_heroi <10000){nivel_heroi = 'Imortal'}
if (xp_heroi > 10001){nivel_heroi = 'Radiante'}


console.log("O Herói de nome **"+nome_heroi+"** está no nível de **"+nivel_heroi+"**")