const tabRadios = Array.from(document.querySelectorAll('input[name="auth_tabs"].tab'));

const updateTabStyles = () => {
	tabRadios.forEach((tab) => {
		const isActive = tab.checked;
		tab.style.backgroundColor = isActive ? "#0a381c" : "#E4E4E4";
		tab.style.color = isActive ? "#fff" : "#000";
        tab.style.borderRadius = isActive ? "61px"  : "";
	});
};

tabRadios.forEach((tab) => {
	tab.addEventListener("change", updateTabStyles);
});

updateTabStyles();

const setupPasswordToggle = (btnId, inputId, iconId) => {
	const btn = document.getElementById(btnId);
	const input = document.getElementById(inputId);
	const icon = document.getElementById(iconId);

	if (!btn || !input || !icon) return;

	btn.addEventListener("click", () => {
		const isPassword = input.type === "password";
		input.type = isPassword ? "text" : "password";
		icon.src = isPassword
			? "/public_folder/auth/eye-closed.svg"
			: "/public_folder/auth/eye-opened.svg";
		icon.alt = isPassword ? "Hide password" : "Show password";
	});
};

setupPasswordToggle("show_password_btn", "password_input", "eye_icon");
setupPasswordToggle("register_show_password_btn", "register_password_input", "register_eye_icon");
setupPasswordToggle(
	"register_show_confirm_btn",
	"register_confirm_password_input",
	"register_eye_icon_confirm"
);

