function xemGia() {
    let tenHoaQua = document.getElementById("ten_hoa_qua").value.trim();
    let giaTien = "";

    switch (tenHoaQua) {
        case "Ổi":
        case "Dưa Hấu":
            giaTien = "20000 VNĐ/kg";
            break;
        case "Táo":
            giaTien = "30000 VNĐ/kg";
            break;
        case "Cam":
        case "Chôm Chôm":
            giaTien = "40000 VNĐ/kg";
            break;
        case "Măng Cụt":
            giaTien = "50000 VNĐ/kg";
            break;
        default:
            giaTien = "Tìm không thấy";
            break;
    }

    document.getElementById("ket_qua").innerHTML = giaTien;
}
