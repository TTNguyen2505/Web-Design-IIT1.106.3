const Cau6 = {
    solve() {
        function solve_square_poly(a, b, c) {
            if (a == 0) {
                alert(`a must not be zero.`)
                return
            }

            const delta = b * b - 4 * a * c;

            if (delta < 0) {
                alert("No solution.")
            } else if (delta == 0) {
                let root = -b / (2 * a)
                alert(`The doubled root x1 = x2 = ${root}`)
            } else {
                let x1 = (-b + Math.sqrt(delta)) / (2 * a)
                let x2 = (-b - Math.sqrt(delta)) / (2 * a)
                alert(`x1 = ${x1} and x2 = ${x2}`)
            }
        }

        const a = Number(prompt("Input a: "))
        const b = Number(prompt("Input b: "))
        const c = Number(prompt("Input c: "))

        solve_square_poly(a, b, c);
    }
}

Cau6.solve()
