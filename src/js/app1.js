function check()
    {
    var name = document.getElementById("name").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if
        (name == "nguyen thị loan" ||
        name == "noan" ||
        name == "na" ||
        name == "Loan")
        {
            window.open("success.html");
        }

        else
        {
            alert("Bạn không phải người mà echxanh đang tìm kiếm :((");
        }
    }