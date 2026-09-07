// Account Page

import {
    updateCurrentUser,
    logout
} from "./auth.js";

import {
    requireAuth
} from "./auth.guard.js";

import {
    applyTheme,
    normalizeTheme
} from "./theme.js";

import {
    applyLanguage,
    normalizeLanguage
} from "./i18n.js";

// Get Current User

const currentUser =
    requireAuth();


// Initialize Account

if (currentUser) {
    initializeAccount(
        currentUser
    );
}


// Initialize Account

function initializeAccount(user) {
    const accountForm =
        document.getElementById(
            "accountForm"
        );

    const nameInput =
        document.getElementById(
            "name"
        );

    const emailInput =
        document.getElementById(
            "email"
        );

    const nameError =
        document.getElementById(
            "nameError"
        );

    const accountMessage =
        document.getElementById(
            "accountMessage"
        );

    const saveAccountButton =
        document.getElementById(
            "saveAccountButton"
        );

    const saveButtonText =
        document.getElementById(
            "saveButtonText"
        );

    const saveButtonSpinner =
        document.getElementById(
            "saveButtonSpinner"
        );

    const profileAvatar =
        document.getElementById(
            "profileAvatar"
        );

    const changeAvatarButton =
        document.getElementById(
            "changeAvatarButton"
        );

    const removeAvatarButton =
        document.getElementById(
            "removeAvatarButton"
        );

    const avatarInput =
        document.getElementById(
            "avatarInput"
        );

    const themeSelect =
        document.getElementById(
            "themeSelect"
        );

    const languageSelect =
        document.getElementById(
            "languageSelect"
        );

    const logoutButton =
        document.getElementById(
            "logoutButton"
        );

    let selectedAvatar =
        user.avatar;


    // Populate Account Data

    nameInput.value =
        user.name;

    emailInput.value =
        user.email;

    themeSelect.value =
        normalizeTheme(
            user.preferences?.theme
        );

    languageSelect.value =
        normalizeLanguage(
            user.preferences?.language
        );

    renderAvatar(
        selectedAvatar
    );


    // Apply Current Theme

    applyTheme(
        user.preferences?.theme
    );


    // Change Avatar

    changeAvatarButton.addEventListener(
        "click",
        () => {
            avatarInput.click();
        }
    );


    // Select Avatar

    avatarInput.addEventListener(
        "change",
        event => {
            const file =
                event.target.files?.[0];

            if (!file) {
                return;
            }

            if (
                !file.type.startsWith(
                    "image/"
                )
            ) {
                showMessage(
                    "Please select a valid image.",
                    "error"
                );

                avatarInput.value = "";

                return;
            }

            const maxFileSize =
                2 * 1024 * 1024;

            if (
                file.size >
                maxFileSize
            ) {
                showMessage(
                    "Image size must be 2 MB or less.",
                    "error"
                );

                avatarInput.value = "";

                return;
            }

            const reader =
                new FileReader();

            reader.onload = () => {
                selectedAvatar =
                    reader.result;

                renderAvatar(
                    selectedAvatar
                );

                clearMessage();
            };

            reader.onerror = () => {
                showMessage(
                    "Unable to read the selected image.",
                    "error"
                );
            };

            reader.readAsDataURL(
                file
            );
        }
    );


    // Remove Avatar

    removeAvatarButton.addEventListener(
        "click",
        () => {
            selectedAvatar = null;

            avatarInput.value = "";

            renderAvatar(null);

            clearMessage();
        }
    );


    // Theme Preview

    themeSelect.addEventListener(
        "change",
        () => {
            applyTheme(
                themeSelect.value
            );

            clearMessage();
        }
    );


    // Language Change

    languageSelect.addEventListener(
        "change",
        () => {
            applyLanguage(
                languageSelect.value
            );

            clearMessage();
        }
    );


    // Save Account

    accountForm.addEventListener(
        "submit",
        event => {
            event.preventDefault();

            clearMessage();

            const name =
                nameInput.value.trim();

            if (!name) {
                showNameError(
                    "Please enter your full name."
                );

                return;
            }

            if (name.length < 2) {
                showNameError(
                    "Your name must be at least 2 characters."
                );

                return;
            }

            clearNameError();

            setLoading(true);

            try {
                const updatedUser =
                    updateCurrentUser({
                        name,

                        avatar:
                            selectedAvatar,

                        preferences: {
                            theme:
                                normalizeTheme(
                                    themeSelect.value
                                ),

                            language:
                                normalizeLanguage(
                                    languageSelect.value
                                )
                        }
                    });

                showMessage(
                    "Your account has been updated successfully.",
                    "success"
                );

                renderAvatar(
                    updatedUser.avatar
                );

                applyTheme(
                    updatedUser.preferences.theme
                );

                applyLanguage(
                    updatedUser.preferences.language
                );
            } catch (error) {
                console.error(error);

                showMessage(
                    "Unable to save your changes. Please try again.",
                    "error"
                );
            } finally {
                setLoading(false);
            }
        }
    );


    // Logout

    logoutButton.addEventListener(
        "click",
        () => {
            logout();

            window.location.replace(
                "sign-in.html"
            );
        }
    );


    // Name Validation

    nameInput.addEventListener(
        "input",
        () => {
            clearMessage();

            const name =
                nameInput.value.trim();

            if (
                name &&
                name.length >= 2
            ) {
                clearNameError();
            }
        }
    );


    // Render Avatar

    function renderAvatar(avatar) {
        if (avatar) {
            profileAvatar.innerHTML = `
        <img
          src="${avatar}"
          alt="Profile photo"
        />
      `;

            removeAvatarButton.classList.remove(
                "d-none"
            );

            return;
        }

        profileAvatar.innerHTML = `
      <i
        class="fa-regular fa-user"
      ></i>
    `;

        removeAvatarButton.classList.add(
            "d-none"
        );
    }


    // Show Name Error

    function showNameError(
        message
    ) {
        nameInput.classList.add(
            "is-invalid"
        );

        nameError.textContent =
            message;
    }


    // Clear Name Error

    function clearNameError() {
        nameInput.classList.remove(
            "is-invalid"
        );

        nameError.textContent = "";
    }


    // Show Account Message

    function showMessage(
        message,
        type
    ) {
        accountMessage.textContent =
            message;

        accountMessage.className =
            `account-message ${type}`;
    }


    // Clear Account Message

    function clearMessage() {
        accountMessage.textContent = "";

        accountMessage.className =
            "account-message";
    }


    // Set Loading State

    function setLoading(
        isLoading
    ) {
        saveAccountButton.disabled =
            isLoading;

        saveButtonSpinner.classList.toggle(
            "d-none",
            !isLoading
        );

        saveButtonText.textContent =
            isLoading
                ? "Saving..."
                : "Save Changes";
    }
}