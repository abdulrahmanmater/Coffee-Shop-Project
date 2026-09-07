// Sign Up Page

import {
    registerUser,
    loginUser,
    isAuthenticated
} from "./auth.js";

import {
    t,
    normalizeLanguage
} from "./i18n.js";


const signUpForm =
    document.getElementById(
        "signUpForm"
    );

const nameInput =
    document.getElementById(
        "name"
    );

const emailInput =
    document.getElementById(
        "email"
    );

const passwordInput =
    document.getElementById(
        "password"
    );

const confirmPasswordInput =
    document.getElementById(
        "confirmPassword"
    );

const passwordToggle =
    document.getElementById(
        "passwordToggle"
    );

const confirmPasswordToggle =
    document.getElementById(
        "confirmPasswordToggle"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );

const signUpButton =
    document.getElementById(
        "signUpButton"
    );

const buttonText =
    document.getElementById(
        "buttonText"
    );

const buttonSpinner =
    document.getElementById(
        "buttonSpinner"
    );


// Get Current Language

function getCurrentLanguage() {
    return normalizeLanguage(
        document.documentElement.lang
    );
}


// Redirect Authenticated User

if (isAuthenticated()) {
    window.location.replace(
        "account.html"
    );
}


// Toggle Password Visibility

function togglePasswordVisibility(
    input,
    button
) {
    const icon =
        button.querySelector("i");

    const isPassword =
        input.type ===
        "password";

    input.type =
        isPassword
            ? "text"
            : "password";

    icon.classList.toggle(
        "fa-eye",
        !isPassword
    );

    icon.classList.toggle(
        "fa-eye-slash",
        isPassword
    );

    button.setAttribute(
        "aria-label",
        isPassword
            ? "Hide password"
            : "Show password"
    );
}


// Show Field Error

function showFieldError(
    input,
    errorElement,
    message
) {
    input.classList.add(
        "is-invalid"
    );

    errorElement.textContent =
        message;

    errorElement.style.display =
        "block";
}


// Clear Field Error

function clearFieldError(
    input,
    errorElement
) {
    input.classList.remove(
        "is-invalid"
    );

    errorElement.textContent =
        "";

    errorElement.style.display =
        "none";
}


// Clear Form Message

function clearFormMessage() {
    formMessage.textContent =
        "";

    formMessage.className =
        "auth-message";
}


// Show Form Error

function showFormError(
    message
) {
    formMessage.textContent =
        message;

    formMessage.className =
        "auth-message error";
}


// Set Loading State

function setLoading(
    isLoading
) {
    const language =
        getCurrentLanguage();

    signUpButton.disabled =
        isLoading;

    buttonSpinner.classList.toggle(
        "d-none",
        !isLoading
    );

    buttonText.textContent =
        isLoading
            ? t(
                "auth.creatingAccount",
                language
            )
            : t(
                "auth.createAccount",
                language
            );
}


// Validate Name

function validateName() {
    const name =
        nameInput.value.trim();

    const nameError =
        document.getElementById(
            "nameError"
        );

    const language =
        getCurrentLanguage();

    if (!name) {
        showFieldError(
            nameInput,
            nameError,
            t(
                "validation.nameRequired",
                language
            )
        );

        return false;
    }

    if (name.length < 2) {
        showFieldError(
            nameInput,
            nameError,
            t(
                "validation.nameTooShort",
                language
            )
        );

        return false;
    }

    clearFieldError(
        nameInput,
        nameError
    );

    return true;
}


// Validate Email

function validateEmail() {
    const email =
        emailInput.value.trim();

    const emailError =
        document.getElementById(
            "emailError"
        );

    const language =
        getCurrentLanguage();

    if (!email) {
        showFieldError(
            emailInput,
            emailError,
            t(
                "validation.emailRequired",
                language
            )
        );

        return false;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !emailPattern.test(email)
    ) {
        showFieldError(
            emailInput,
            emailError,
            t(
                "validation.invalidEmail",
                language
            )
        );

        return false;
    }

    clearFieldError(
        emailInput,
        emailError
    );

    return true;
}


// Validate Password

function validatePassword() {
    const password =
        passwordInput.value;

    const passwordError =
        document.getElementById(
            "passwordError"
        );

    const language =
        getCurrentLanguage();

    if (!password) {
        showFieldError(
            passwordInput,
            passwordError,
            t(
                "validation.passwordRequired",
                language
            )
        );

        return false;
    }

    if (password.length < 8) {
        showFieldError(
            passwordInput,
            passwordError,
            t(
                "validation.passwordTooShort",
                language
            )
        );

        return false;
    }

    clearFieldError(
        passwordInput,
        passwordError
    );

    return true;
}


// Validate Confirm Password

function validateConfirmPassword() {
    const confirmPassword =
        confirmPasswordInput.value;

    const confirmPasswordError =
        document.getElementById(
            "confirmPasswordError"
        );

    const language =
        getCurrentLanguage();

    if (!confirmPassword) {
        showFieldError(
            confirmPasswordInput,
            confirmPasswordError,
            t(
                "validation.confirmPasswordRequired",
                language
            )
        );

        return false;
    }

    if (
        confirmPassword !==
        passwordInput.value
    ) {
        showFieldError(
            confirmPasswordInput,
            confirmPasswordError,
            t(
                "validation.passwordsDoNotMatch",
                language
            )
        );

        return false;
    }

    clearFieldError(
        confirmPasswordInput,
        confirmPasswordError
    );

    return true;
}


// Validate Form

function validateForm() {
    clearFormMessage();

    const isNameValid =
        validateName();

    const isEmailValid =
        validateEmail();

    const isPasswordValid =
        validatePassword();

    const isConfirmPasswordValid =
        validateConfirmPassword();

    return (
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid
    );
}


// Handle Sign Up

signUpForm.addEventListener(
    "submit",
    event => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const name =
            nameInput.value.trim();

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;

        setLoading(true);

        try {
            registerUser({
                name,
                email,
                password
            });

            loginUser(
                email,
                password
            );

            window.location.replace(
                "account.html"
            );
        } catch (error) {
            const language =
                getCurrentLanguage();

            if (
                error.message ===
                "EMAIL_EXISTS"
            ) {
                showFieldError(
                    emailInput,
                    document.getElementById(
                        "emailError"
                    ),
                    t(
                        "validation.emailExists",
                        language
                    )
                );

                emailInput.focus();

                setLoading(false);

                return;
            }

            showFormError(
                t(
                    "validation.genericError",
                    language
                )
            );

            setLoading(false);
        }
    }
);


// Password Toggle

passwordToggle.addEventListener(
    "click",
    () => {
        togglePasswordVisibility(
            passwordInput,
            passwordToggle
        );
    }
);


// Confirm Password Toggle

confirmPasswordToggle.addEventListener(
    "click",
    () => {
        togglePasswordVisibility(
            confirmPasswordInput,
            confirmPasswordToggle
        );
    }
);


// Live Name Validation

nameInput.addEventListener(
    "input",
    () => {
        validateName();
    }
);


// Live Email Validation

emailInput.addEventListener(
    "input",
    () => {
        validateEmail();
    }
);


// Live Password Validation

passwordInput.addEventListener(
    "input",
    () => {
        validatePassword();

        if (
            confirmPasswordInput.value
        ) {
            validateConfirmPassword();
        }
    }
);


// Live Confirm Password Validation

confirmPasswordInput.addEventListener(
    "input",
    () => {
        validateConfirmPassword();
    }
);