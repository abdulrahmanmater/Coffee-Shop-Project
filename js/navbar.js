// Navbar

import {
    getCurrentUser
} from "./auth.js";

import {
    t,
    normalizeLanguage
} from "./i18n.js";


// Initialize Navbar

export function initializeNavbar() {
    const accountLink =
        document.getElementById(
            "navbarAccountLink"
        );

    const accountText =
        document.getElementById(
            "navbarAccountText"
        );

    if (
        !accountLink ||
        !accountText
    ) {
        return;
    }

    const currentUser =
        getCurrentUser();

    const currentLanguage =
        normalizeLanguage(
            document.documentElement.lang
        );


    // Handle Guest User

    if (!currentUser) {
        accountLink.href =
            "sign-in.html";

        accountLink.setAttribute(
            "aria-label",
            t(
                "common.signIn",
                currentLanguage
            )
        );

        accountText.textContent =
            t(
                "common.signIn",
                currentLanguage
            );

        return;
    }


    // Handle Logged In User

    accountLink.href =
        "account.html";

    accountLink.setAttribute(
        "aria-label",
        t(
            "common.myAccount",
            currentLanguage
        )
    );

    accountText.textContent =
        currentUser.name;
}