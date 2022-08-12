function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
var sum = 0;
for (var i = 0; i <= 20; i++) {
    console.log(fibonacci(i));
    sum = sum + fibonacci(i);
}
console.log("tổng 20 số fibonacci đầu tiên là: " + sum);
