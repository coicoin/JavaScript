function getSalary(rate, days) {
    days = days || 22;
    return rate * days;
}
getSalary(3, 10); // 30
getSalary(1); // 22
getSalary(2, 0); // 44