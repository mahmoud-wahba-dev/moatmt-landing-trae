const showPasswordBtn = document.getElementById("show_password_btn");
const passwordInput = document.getElementById("password_input");
const eyeIcon = document.getElementById("eye_icon");
// Toggle password visibility and swap icon
if (showPasswordBtn && passwordInput && eyeIcon) {
	showPasswordBtn.addEventListener("click", () => {
		const isPassword = passwordInput.type === "password";
		passwordInput.type = isPassword ? "text" : "password";
		eyeIcon.src = isPassword
			? "/public_folder/auth/eye-closed.svg"
			: "/public_folder/auth/eye-opened.svg";
		eyeIcon.alt = isPassword ? "Hide password" : "Show password";
	});
}

