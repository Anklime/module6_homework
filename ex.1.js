// задание 1
let arr = [3, 5, null, 9, undefined, 0 ];

function getOddAndEvenCount(arr) {
    let zerocount = 0;
    let numbercount = 0;
    let evencount = 0;
    let oddcount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" ||!isNaN(arr[i])) {
            numbercount += 1;
            if (arr[i] === 0) {
                zerocount += 1;
            } else if (arr[i] % 2 === 0) {
                evencount += 1;
            } else {
                oddcount += 1;
            }
        }
    }

    console.log(`В данном массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных.`);
}
getOddAndEvenCount(arr);
