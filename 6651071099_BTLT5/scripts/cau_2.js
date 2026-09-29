const Cau2 = {
    solve() {
        function is_leap_year(year) {
            return ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))
        }

        const input = Number.parseInt(prompt("Input the year"))
        let result
        if (is_leap_year(input))
            result = `${input} is a leap year`
        else
            result = `${input} is not a leap year.`
        alert(result);
    }
}

Cau2.solve()