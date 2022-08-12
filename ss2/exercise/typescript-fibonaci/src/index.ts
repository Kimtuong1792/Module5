function fibonacci(num: number): number {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);

}

let sum = 0;
for (let i = 0; i <= 20; i++) {
    console.log(fibonacci(i));
    sum = sum + fibonacci(i)
}
console.log("tổng 20 số fibonacci đầu tiên là: " + sum);
