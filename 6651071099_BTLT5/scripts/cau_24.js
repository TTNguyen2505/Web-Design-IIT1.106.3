function xuatThu() {
    const dayInput = document.getElementById("day").value.trim();
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value.trim();
    const resultElement = document.getElementById("result");

    if (dayInput === "" || yearInput === "") {
        alert("Vui lòng nhập đầy đủ ngày và năm!");
        return;
    }

    const day = parseInt(dayInput, 10);
    const month = parseInt(monthInput, 10);
    const year = parseInt(yearInput, 10);

    // Đối tượng Date trong JS tính tháng từ 0 đến 11
    const dateObj = new Date(year, month - 1, day);

    // Kiểm tra tính hợp lệ của ngày nhập (tránh ngày vượt quá số ngày của tháng)
    if (
        dateObj.getFullYear() !== year ||
        dateObj.getMonth() !== month - 1 ||
        dateObj.getDate() !== day
    ) {
        alert("Ngày tháng năm không hợp lệ!");
        resultElement.innerText = "";
        return;
    }

    // Danh sách thứ trong tuần tương ứng với giá trị getDay() (0: Chủ Nhật -> 6: Thứ 7)
    const daysOfWeek = [
        "Chủ Nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7"
    ];

    const thu = daysOfWeek[dateObj.getDay()];

    // Xuất chuỗi định dạng: "Thứ X Ngày D tháng M năm YYYY"
    resultElement.innerText = `${thu} Ngày ${day} tháng ${month} năm ${year}`;
}