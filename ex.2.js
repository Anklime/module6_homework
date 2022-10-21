//задание 2
function isPrimeNumber(num){
    if ((num < 2) || (num > 1000)) {
        return "Данные не верны!";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return "непростое число";
            }
        }
        return "простое число";
    }
}

let randNum = Math.floor(Math.random() * 2000);
let p = isPrimeNumber(randNum);
console.log("Число " + randNum + " - " + p);