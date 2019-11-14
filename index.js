// повернення максимального числа
function f(...arr) {
    let n = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > n) {
            n = arr[i];
        }
    }
    return n
}
console.log(f(5, -2, 10));
console.log(f(5, -2, 30, 6));