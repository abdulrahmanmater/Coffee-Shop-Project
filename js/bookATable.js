import {
    t,
    normalizeLanguage
} from "./i18n.js";


const bookingForm =
    document.getElementById("bookingForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const dateInput =
    document.getElementById("date");

const peopleInput =
    document.getElementById("people");

const messageInput =
    document.getElementById("message");

const successModalElement =
    document.getElementById(
        "bookingSuccessModal"
    );


if (
    !bookingForm ||
    !nameInput ||
    !emailInput ||
    !phoneInput ||

    !dateInput ||
    !peopleInput ||
    !messageInput
) {
    throw new Error(
        "Booking form elements could not be found."
    );
}


function getCurrentLanguage() {
    return normalizeLanguage(
        document.documentElement.lang
    );
}


function getMessage(key) {
    return t(
        `validation.${key}`,
        getCurrentLanguage()
    );
}


const today =
    new Date();

today.setHours(
    0,
    0,
    0,
    0
);


const maxBookingDate =
    new Date(today);

maxBookingDate.setFullYear(
    maxBookingDate.getFullYear() + 1
);


function formatDate(date) {
    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


dateInput.min =
    formatDate(today);

dateInput.max =
    formatDate(maxBookingDate);


function showError(input, message) {
    clearError(input);

    input.classList.add(
        "is-invalid"
    );

    const error =
        document.createElement("div");

    error.className =
        "validation-error";

    error.textContent =
        message;

    input.insertAdjacentElement(
        "afterend",
        error
    );
}


function clearError(input) {
    input.classList.remove(
        "is-invalid"
    );

    const existingError =
        input.nextElementSibling;

    if (
        existingError &&
        existingError.classList.contains(
            "validation-error"
        )
    ) {
        existingError.remove();
    }
}


function validateName() {
    const value =
        nameInput.value.trim();

    if (!value) {
        showError(
            nameInput,
            getMessage("nameRequired")
        );

        return false;
    }

    if (value.length < 2) {
        showError(
            nameInput,
            getMessage("nameTooShort")
        );

        return false;
    }

    if (value.length > 50) {
        showError(
            nameInput,
            getMessage("nameTooLong")
        );

        return false;
    }

    // Validate that the value contains only letters, spaces, apostrophes, or hyphens.
    // \p{L} supports letters from all languages, including Arabic.
    // The + requires at least one character, while ^ and $ ensure the entire value matches.
    if (
        !/^[\p{L}\s'-]+$/u.test(
            value
        )
    ) {
        showError(
            nameInput,
            getMessage("invalidName")
        );
        return false;
    }
    clearError(nameInput);
    return true;
}
function validateEmail() {
    const value =
        emailInput.value.trim();

    if (!value) {
        showError(
            emailInput,
            getMessage("emailRequired")
        );

        return false;
    }

    if (value.length > 100) {
        showError(
            emailInput,
            getMessage("emailTooLong")
        );

        return false;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !emailPattern.test(value)
    ) {
        showError(
            emailInput,
            getMessage("invalidEmail")
        );

        return false;
    }

    clearError(emailInput);

    return true;
}

function validatePhone() {
    const value =
        phoneInput.value.trim();

    if (!value) {
        showError(
            phoneInput,
            getMessage(
                "phoneRequired"
            )
        );

        return false;
    }

    const normalizedValue =
        value.replace(
            /[\s-]/g,
            ""
        );

    const egyptianPhonePattern =
        /^(?:01[0125]\d{8}|\+201[0125]\d{8})$/;

    if (
        !egyptianPhonePattern.test(
            normalizedValue
        )
    ) {
        showError(
            phoneInput,
            getMessage(
                "invalidEgyptianPhone"
            )
        );

        return false;
    }

    clearError(phoneInput);

    return true;
}

function validateDate() {
    const value =
        dateInput.value;

    if (!value) {
        showError(
            dateInput,
            getMessage("dateRequired")
        );

        return false;
    }

    const selectedDate =
        new Date(
            `${value}T00:00:00`
        );

    if (
        Number.isNaN(
            selectedDate.getTime()
        )
    ) {
        showError(
            dateInput,
            getMessage("dateRequired")
        );

        return false;
    }

    if (
        selectedDate < today
    ) {
        showError(
            dateInput,
            getMessage("dateInPast")
        );

        return false;
    }

    if (
        selectedDate >
        maxBookingDate
    ) {
        showError(
            dateInput,
            getMessage("dateTooFar")
        );

        return false;
    }
    clearError(dateInput);
    return true;
}
function validatePeople() {
    const value =
        Number(
            peopleInput.value
        );
    if (!peopleInput.value) {
        showError(
            peopleInput,
            getMessage(
                "peopleRequired"
            )
        );
        return false;
    }
    if (
        !Number.isInteger(value)
    ) {
        showError(
            peopleInput,
            getMessage(
                "peopleNotInteger"
            )
        );
        return false;
    }
    if (
        value < 1 ||
        value > 10
    ) {
        showError(
            peopleInput,
            getMessage(
                "peopleOutOfRange"
            )
        );
        return false;
    }
    clearError(peopleInput);
    return true;
}


function validateMessage() {
    const value =
        messageInput.value.trim();

    if (!value) {
        clearError(messageInput);

        return true;
    }

    if (value.length < 10) {
        showError(
            messageInput,
            getMessage(
                "messageTooShort"
            )
        );

        return false;
    }

    if (value.length > 500) {
        showError(
            messageInput,
            getMessage(
                "messageTooLong"
            )
        );

        return false;
    }

    clearError(messageInput);

    return true;
}


nameInput.addEventListener(
    "input",
    validateName
);


emailInput.addEventListener(
    "input",
    validateEmail
);

phoneInput.addEventListener(
    "input",
    validatePhone
);

dateInput.addEventListener(
    "change",
    validateDate
);


peopleInput.addEventListener(
    "input",
    validatePeople
);


messageInput.addEventListener(
    "input",
    validateMessage
);


bookingForm.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const isFormValid =
            validateName() &&
            validateEmail() &&
            validatePhone() &&
            validateDate() &&
            validatePeople() &&
            validateMessage();

        if (!isFormValid) {
            const firstInvalidField =
                bookingForm.querySelector(
                    ".is-invalid"
                );

            if (firstInvalidField) {
                firstInvalidField.focus();
            }

            return;
        }

        nameInput.value =
            nameInput.value.trim();

        emailInput.value =
            emailInput.value.trim();

        phoneInput.value =
            phoneInput.value.trim();

        messageInput.value =
            messageInput.value.trim();

        if (!successModalElement) {
            throw new Error(
                "Booking success modal could not be found."
            );
        }

        if (
            typeof bootstrap ===
            "undefined"
        ) {
            throw new Error(
                "Bootstrap is not loaded."
            );
        }

        const successModal =
            bootstrap.Modal.getOrCreateInstance(
                successModalElement
            );

        successModal.show();

        bookingForm.reset();
    }
);