const Cau4 = {
    solve() {
        let excepted_numbers = [5, 7, 93]
        let result = [];
        for (let i = 0; i < 100; i++)
            if (i % 2 === 1 && !excepted_numbers.includes(1))
                result.push(i);

        console.log(result)
    }
}

Cau4.solve()
