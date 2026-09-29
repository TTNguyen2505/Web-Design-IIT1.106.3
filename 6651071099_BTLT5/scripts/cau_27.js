// Hàm xóa hàng tương ứng khi click nút "Xóa"
function xoaDong(button) {
    // Tìm thẻ <tr> gần nhất chứa nút được nhấn
    const row = button.closest("tr");
    if (row) {
        row.remove();
    }
}