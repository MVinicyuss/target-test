let string = "Uma string qualquer";
let arrayDaString = string.toUpperCase().split('');
let numeroDeA = 0;

arrayDaString.forEach(element => {
    if(element === 'A'){
        numeroDeA++;
    }
});

console.log(numeroDeA);
