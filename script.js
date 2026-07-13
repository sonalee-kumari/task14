
let n = 153;

let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first", n, "numbers =", sum);


console.log("Table of", n);
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}


let isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(n + " is a Prime Number");
} else {
    console.log(n + " is not a Prime Number");
}


console.log("Factors of", n);
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}


let temp1 = n;
let digitSum = 0;

while (temp1 > 0) {
    let digit = temp1 % 10;
    digitSum += digit;
    temp1 = Math.floor(temp1 / 10);
}

console.log("Sum of digits =", digitSum);


let temp2 = n;
let armstrongSum = 0;

while (temp2 > 0) {
    let digit = temp2 % 10;
    armstrongSum += digit * digit * digit;
    temp2 = Math.floor(temp2 / 10);
}

if (armstrongSum == n) {
    console.log(n + " is an Armstrong Number");
} else {
    console.log(n + " is not an Armstrong Number");
}