// VALIDATION
function validateEmail(email) {
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        return true;
    }
    else {
        return false;
    }
}

function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var query = document.getElementById("query").value;

    if (name == null || name == "") {
        alert("Please fill the name");
        return false;
    }

    if (validateEmail(email)) {
        alert("Invalid email");
        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        alert("Invalid phone number");
        return false;
    }
    if (query == null || query == "") {
        alert("Please write some query");
        return false;
    }

    alert("Submitted Successfully");
    return true;
}

// FAQ
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

/*Reviews*/
let rev = 0;
carousel(rev);

function previousReview() {
    rev = rev - 1;
    carousel(rev);
}

function nextReview() {
    rev = rev + 1;
    carousel(rev);
}

function carousel(review) {
    let reviews = document
        .getElementsByClassName("review__items");

    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[review].style.display = "block";
}

/*User Details */
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);

function setCookie() {
    let name = document.getElementById("username");
    let yr = document.getElementById("year");
    let roll = document.getElementById("rollno");

    document.cookie = "username=" + name.value + ";path=/" + ";expires=" + expiry.toUTCString();
    document.cookie = "year=" + yr.value + ";path=/" + ";expires=" + expiry.toUTCString();

    window.localStorage.setItem("roll", roll.value);
}

