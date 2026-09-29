const Cau3 = {
    solve() {
        const number_1 = Number(prompt("Input the first number: "))
        const number_2 = Number(prompt("Input the second number: "))
        const number_3 = Number(prompt("Input the third number: "))

        alert(`The largest number is: ${Math.max([number_1, number_2, number_3])}`)
    }
}

Cau3.solve();