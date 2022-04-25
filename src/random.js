export function random(dieSize, mod = 0, numD = 1){
    var randomNumber = 0;

    for (let i = 0; i < numD; i++) {
        randomNumber += Math.floor((Math.random() * dieSize) + 1);
    }

    randomNumber += mod;
    return randomNumber;
}