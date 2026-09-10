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

export function initializeScrollToTop() {
    // Create button element
    const btn = document.createElement("button");
    btn.id = "scrollToTopBtn";
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    btn.setAttribute("aria-label", "Scroll to top");

    // Add styles
    const style = document.createElement("style");
    style.innerHTML = `
        #scrollToTopBtn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 99;
            background-color: var(--coffee-primary);
            color: var(--coffee-bg);
            border: none;
            outline: none;
            cursor: pointer;
            padding: 15px;
            border-radius: 50%;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s, transform 0.3s, background-color 0.3s;
            width: 50px;
            height: 50px;
            box-shadow: var(--coffee-shadow);
        }

        #scrollToTopBtn.show {
            opacity: 1;
            visibility: visible;
        }

        #scrollToTopBtn:hover {
            background-color: var(--coffee-primary-light);
            transform: scale(1.1);
        }

        @media (max-width: 767.98px) {
            #scrollToTopBtn {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 16px;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(btn);

    // Scroll event listener
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });

    // Click event listener
    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

initializeScrollToTop()