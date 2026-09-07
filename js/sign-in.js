// Sign In Page

import {
    loginUser,
    isAuthenticated
} from "./auth.js";

import {
    t,
    normalizeLanguage
} from "./i18n.js";


const signInForm =
    document.getElementById(
        "signInForm"
    );

const emailInput =
    document.getElementById(
        "email"
    );

const passwordInput =
    document.getElementById(
        "password"
    );

const passwordToggle =
    document.getElementById(
        "passwordToggle"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );

const signInButton =
    document.getElementById(
        "signInButton"
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

function togglePasswordVisibility() {
    const icon =
        passwordToggle.querySelector(
            "i"
        );

    const isPassword =
        passwordInput.type ===
        "password";

    passwordInput.type =
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

    passwordToggle.setAttribute(
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

    signInButton.disabled =
        isLoading;

    buttonSpinner.classList.toggle(
        "d-none",
        !isLoading
    );

    buttonText.textContent =
        isLoading
            ? t(
                "auth.signingIn",
                language
            )
            : t(
                "common.signIn",
                language
            );
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

    clearFieldError(
        passwordInput,
        passwordError
    );

    return true;
}


// Validate Form

function validateForm() {
    clearFormMessage();

    const isEmailValid =
        validateEmail();

    const isPasswordValid =
        validatePassword();

    return (
        isEmailValid &&
        isPasswordValid
    );
}


// Handle Sign In

signInForm.addEventListener(
    "submit",
    event => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;

        setLoading(true);

        try {
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
                "INVALID_CREDENTIALS"
            ) {
                showFormError(
                    t(
                        "validation.invalidCredentials",
                        language
                    )
                );

                passwordInput.value =
                    "";

                passwordInput.focus();

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
    togglePasswordVisibility
);


// Live Email Validation

emailInput.addEventListener(
    "input",
    () => {
        validateEmail();

        clearFormMessage();
    }
);


// Live Password Validation

passwordInput.addEventListener(
    "input",
    () => {
        validatePassword();

        clearFormMessage();
    }
);