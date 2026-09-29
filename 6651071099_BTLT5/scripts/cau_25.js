function tinhTien() {
    const foodSelect = document.getElementById("foodSelect");
    const drinkSelect = document.getElementById("drinkSelect");
    const billBody = document.getElementById("billBody");
    const isNight = document.getElementById("nighttime").checked;

    const selectedItems = [];
    let subtotal = 0;

    // Lấy các món ăn đã chọn
    for (let i = 0; i < foodSelect.options.length; i++) {
        const option = foodSelect.options[i];
        if (option.selected) {
            const price = parseInt(option.value, 10);
            selectedItems.push({ name: option.text, price: price });
            subtotal += price;
        }
    }

    // Lấy các nước uống đã chọn
    for (let i = 0; i < drinkSelect.options.length; i++) {
        const option = drinkSelect.options[i];
        if (option.selected) {
            const price = parseInt(option.value, 10);
            selectedItems.push({ name: option.text, price: price });
            subtotal += price;
        }
    }

    // Nếu chọn ban đêm, tổng tiền tăng 10%
    const total = isNight ? Math.round(subtotal * 1.1) : subtotal;

    // Xuất bảng danh sách món và tổng tiền
    let htmlContent = "";
    selectedItems.forEach(item => {
        htmlContent += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
            </tr>
        `;
    });

    htmlContent += `
        <tr>
            <td>Tổng tiền</td>
            <td>${total} đồng</td>
        </tr>
    `;

    billBody.innerHTML = htmlContent;
}