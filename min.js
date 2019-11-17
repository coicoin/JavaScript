function myMin(a, b) {
    b = b || Infinity;
    return a < b ? a : b;
}
myMin(2, 7); // 2
myMin(13, 7); // 7
myMin(-13); // -13

function myMin2(a, b) {
    var min = a < b ? a : b;
    var c = arguments[2]; //позволяет получить доступ ко всем переданным аргументам
    return c < min ? c : min;
}
myMin2(2, 3, 4); // 2
myMin2(20, 3, 4); // 3
myMin2(20, 30, 4); // 4