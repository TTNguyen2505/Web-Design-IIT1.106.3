function tinhCanChi() {
    const namInput = document.getElementById("namDuongLich").value.trim();
    const resultInput = document.getElementById("namAmLich");

    // Yêu cầu: Kiểm tra validate giá trị nhập vào (phải là số, không được rỗng, phải lớn hơn 0)
    if (namInput === "") {
        alert("Vui lòng nhập năm dương lịch!");
        resultInput.value = "";
        return;
    }

    const nam = parseInt(namInput, 10);

    if (isNaN(nam) || nam <= 0) {
        alert("Năm dương lịch không hợp lệ! Vui lòng nhập số nguyên dương.");
        resultInput.value = "";
        return;
    }

    // Mảng dữ liệu 10 Can
    const canArray = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];

    // Mảng dữ liệu 12 Chi (viết thường để khớp với giao diện mẫu: "Ất mùi")
    const chiArray = ["thân", "dậu", "tuất", "hợi", "tý", "sửu", "dần", "mão", "thìn", "tỵ", "ngọ", "mùi"];

    // Thuật toán tính Can Chi dựa trên phép chia lấy dư
    const can = canArray[nam % 10];
    const chi = chiArray[nam % 12];

    // Gán kết quả ra màn hình
    resultInput.value = can + " " + chi;
}