const Cau1 = {
    solve() {
        let a = 5
        let b = 6
        let c = 7

        let p = (a + b + c) / 2
        let area = Math.sqrt(p * (p - a) * (p - b) * (p - c))

        console.log(area)
        let displayObject = document.querySelector("#display-1")
        displayObject.innerHTML = `The area of the triangle is ${area}`

        window.setTimeout(() => {
            alert(`The area of the triangle is ${area}`)
        }, 1500)
    }
}

Cau1.solve()