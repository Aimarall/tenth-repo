//Выведите столбец чисел от 1 до 100.
for (let number1 = 1; number1 < 101; number1++) {
    console.log(number1);
}


// Выведите столбец чисел от 11 до 33.
for (let number2 = 11; number2 < 34; number2++) {
    console.log(number2);
}


// Выведите столбец четных чисел в промежутке от 0 до 100.
for (let number3 = 0; number3 < 101; number3++) {
    if (number3 % 2 == 0) {
        console.log(number3);
    }
}


// С помощью цикла найдите сумму чисел от 1 до 100.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
    console.log(sum);
}

