function calculateSalary() {
    const baseSalaryInput = document.getElementById("baseSalary").value.trim();
    const salaryCoeffInput = document.getElementById("salaryCoeff").value.trim();
    const monthlySalaryInput = document.getElementById("monthlySalary");

    if (baseSalaryInput === "" || salaryCoeffInput === "") {
        alert("Vui lòng nhập đầy đủ Lương và Hệ số lương!");
        return;
    }

    const baseSalary = parseFloat(baseSalaryInput);
    const salaryCoeff = parseFloat(salaryCoeffInput);

    if (isNaN(baseSalary) || isNaN(salaryCoeff)) {
        alert("Giá trị nhập vào phải là số hợp lệ!");
        return;
    }

    // Tính lương tháng = Lương * Hệ số lương
    const monthlySalary = baseSalary * salaryCoeff;
    monthlySalaryInput.value = monthlySalary;
}