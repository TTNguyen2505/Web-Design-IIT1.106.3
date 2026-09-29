const Cau5 = {
    solve() {
        function is_prime(number) {
            if (number <= 1)
                return false;

            if (number == 2)
                return true

            for (let i = 2; i < Math.parseInt(Math.sqrt(number)); i++) {
                if (number % i == 0)
                    return false
            }

            return true;
        }

        const input_number = Number.parseInt(prompt("Input a number: "))
        let result

        if (is_prime(input_number))
            result = `${input_number} is a prime number.`
        else
            result = `${input_number} is not a prime number.`

        alert(result)
    }
}

Cau5.solve()
