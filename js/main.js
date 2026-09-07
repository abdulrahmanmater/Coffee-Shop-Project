// Main

import {
    getCurrentUser
} from "./auth.js";

import {
    initializeNavbar
} from "./navbar.js";

import {
    applyUserTheme
} from "./theme.js";

import {
    applyLanguage,
    normalizeLanguage
} from "./i18n.js";


// Get Current User

const currentUser =
    getCurrentUser();


// Get User Preferences

const currentTheme =
    currentUser?.preferences
        ?.theme;

const currentLanguage =
    normalizeLanguage(
        currentUser?.preferences
            ?.language
    );


// Apply User Preferences

applyUserTheme(
    currentUser
);

applyLanguage(
    currentLanguage
);


// Load Navbar

fetch(
    "components/navbar/navbar.html"
)
    .then(response => {
        if (!response.ok) {
            throw new Error(
                "Failed to load navbar."
            );
        }

        return response.text();
    })
    .then(data => {
        const navbar =
            document.getElementById(
                "navbar"
            );

        if (!navbar) {
            return;
        }

        navbar.innerHTML = data;

        applyLanguage(
            currentLanguage
        );
        initializeNavbar();

    })
    .catch(error => {
        console.error(error);
    });


// Load Footer

fetch(
    "components/footer/footer.html"
)
    .then(response => {
        if (!response.ok) {
            throw new Error(
                "Failed to load footer."
            );
        }

        return response.text();
    })
    .then(data => {
        const footer =
            document.getElementById(
                "footer"
            );

        if (!footer) {
            return;
        }

        footer.innerHTML = data;

        applyLanguage(
            currentLanguage
        );
    })
    .catch(error => {
        console.error(error);
    });