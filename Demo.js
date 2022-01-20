// let test = "Heigerman"

// const countVowel = (string) => {
//     let str = string.toUpperCase();
//     console.log(str);
//     let count = 0;
//     for (let i in str) {
//         if (str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U" || str[i] === "Y") {
//             count++
//         }
//     }
//     return count;
// };

// console.log(countVowel(test));

const array = [1,2,3,4,5]

const filter = (arr, func) => {
    let newArray = [];
    arr.forEach((i)=> {
        if (func(i)) {
            newArray.push(i)
        };
    });
    return newArray;
}

console.log(array.filter((i)=> i > 2));
console.log(filter(array, (i)=> i > 2));
console.log(array.filter((i)=> i % 2 === 0));
console.log(filter(array,(i)=> i % 2 === 0));

const map = (arr, func) => {
    let newArray = [];
    arr.forEach((i)=> {
            newArray.push(func(i))
    });
    return newArray;
};

console.log(array.map((i)=> {return 5}))
console.log(map(array,(i)=> i + 2))