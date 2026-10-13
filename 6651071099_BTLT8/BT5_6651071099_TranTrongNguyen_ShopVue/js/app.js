Vue.createApp({
  data() {
    return {
      // Mảng nguồn: Vue dùng dữ liệu này để render danh mục bằng v-for.
      products: [
        { id: 1, ten: 'Tai nghe Bluetooth AirBeat', anh: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', gia: 590000, moTa: 'Âm thanh sống động, pin 30 giờ.' },
        { id: 2, ten: 'Sạc nhanh 30W USB-C', anh: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', gia: 290000, moTa: 'Công nghệ sạc nhanh an toàn.' },
        { id: 3, ten: 'Cáp USB-C bọc dù', anh: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80', gia: 120000, moTa: 'Dài 1.5 m, chống gãy gập.' },
        { id: 4, ten: 'Chuột không dây Silent', anh: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80', gia: 350000, moTa: 'Êm ái, kết nối Bluetooth.' },
        { id: 5, ten: 'Bàn phím cơ Mini', anh: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', gia: 790000, moTa: 'Layout 68 phím, LED RGB.' },
        { id: 6, ten: 'Đế sạc không dây', anh: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=600&q=80', gia: 420000, moTa: 'Sạc chuẩn Qi tiện lợi.' },
        { id: 7, ten: 'Ốp lưng trong suốt', anh: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=600&q=80', gia: 180000, moTa: 'Bảo vệ máy, chống ố vàng.' },
        { id: 8, ten: 'Giá đỡ điện thoại', anh: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80', gia: 150000, moTa: 'Gập gọn, điều chỉnh góc nhìn.' }
      ],
      cart: [],
      tuKhoa: ''
    };
  },
  computed: {
    // Tự tính số món, nên interpolation ở header đổi tức thời.
    cartCount() { return this.cart.length; },
    // Cộng giá toàn bộ các sản phẩm trong cart mỗi khi cart thay đổi.
    tongTien() { return this.cart.reduce((tong, sanPham) => tong + sanPham.gia, 0); },
    // Lọc tên/mô tả không phân biệt hoa-thường theo dữ liệu nhập v-model.
    danhSachLoc() {
      const tuKhoa = this.tuKhoa.trim().toLocaleLowerCase('vi-VN');
      if (!tuKhoa) return this.products;
      return this.products.filter((sanPham) => `${sanPham.ten} ${sanPham.moTa}`.toLocaleLowerCase('vi-VN').includes(tuKhoa));
    }
  },
  methods: {
    // Đẩy sản phẩm vào cart; Vue nhận biết mảng đổi và cập nhật UI.
    themVaoGio(sanPham) { this.cart.push(sanPham); },
    // Xóa phần tử đúng vị trí trong cart.
    xoaKhoiGio(index) { this.cart.splice(index, 1); },
    // Định dạng tiền để tái sử dụng ở card và giỏ hàng.
    dinhDangTien(gia) { return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(gia); }
  }
  // Nếu dùng Vanilla JS, mỗi lần thêm/xóa giỏ hàng phải tự querySelector + cập nhật DOM thủ công — Vue tự động làm điều này nhờ reactivity.
}).mount('#app');
