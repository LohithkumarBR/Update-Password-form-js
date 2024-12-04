let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");

let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

let updateBtnEl = document.getElementById("updateBtn");

let validateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};

let validateConfirmPassword = function() {
    if (confirmPasswordEl.value === newPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "";
    } else {
        confirmPasswordErrMsgEl.textContent = "Passwords must be same";
    }
};

newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);
updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }

    if (confirmPasswordEl.value === newPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "";
    } else {
        confirmPasswordErrMsgEl.textContent = "Passwords must be same";
    }
});