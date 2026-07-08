function generateCard() {

    // Get form values

    let company = document.getElementById("company").value;

    let fullname = document.getElementById("fullname").value;

    let idnumber = document.getElementById("idnumber").value;

    let department = document.getElementById("department").value;

    let position = document.getElementById("position").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phone").value;

    let expiry = document.getElementById("expiry").value;

    // Display information on the ID card

    document.getElementById("companyDisplay").textContent =

        company || "PRE-ROI Web Building Sites";

    document.getElementById("nameDisplay").textContent =

        fullname || "Full Name";

    document.getElementById("idDisplay").textContent =

        idnumber || "PR-001";

    document.getElementById("departmentDisplay").textContent =

        department || "Web Development";

    document.getElementById("positionDisplay").textContent =

        position || "Staff";

    document.getElementById("emailDisplay").textContent =

        email || "example@gmail.com";

    document.getElementById("phoneDisplay").textContent =

        phone || "09012345678";

    document.getElementById("expiryDisplay").textContent =

        expiry || "2030-12-31";

    // Display uploaded photo

    let photo = document.getElementById("photo");

    if (photo.files.length > 0) {

        let reader = new FileReader();

        reader.onload = function(e) {

            document.getElementById("photoDisplay").src = e.target.result;

        };

        reader.readAsDataURL(photo.files[0]);

    }

    alert("Staff ID Card Generated Successfully!");

}