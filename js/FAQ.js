import {
    t,
    normalizeLanguage
} from "./i18n.js";

import {
    faqData
} from "../data/faq.data.js";


const faqAccordion =
    document.getElementById(
        "faqAccordion"
    );


function getCurrentLanguage() {
    return normalizeLanguage(
        document.documentElement.lang
    );
}


function translate(key) {
    return t(
        key,
        getCurrentLanguage()
    );
}


function createFaqItem(faq) {
    const item =
        document.createElement("div");

    item.className =
        "accordion-item bg-transparent border-0 border-bottom border-secondary";


    const buttonId =
        `faqButton${faq.id}`;

    const collapseId =
        `faqCollapse${faq.id}`;


    const header =
        document.createElement("h2");

    header.className =
        "accordion-header";


    const button =
        document.createElement("button");

    button.id =
        buttonId;

    button.className =
        "accordion-button custom-accordion-btn collapsed";

    button.type =
        "button";

    button.dataset.bsToggle =
        "collapse";

    button.dataset.bsTarget =
        `#${collapseId}`;

    button.setAttribute(
        "aria-expanded",
        "false"
    );

    button.setAttribute(
        "aria-controls",
        collapseId
    );

    button.textContent =
        translate(
            faq.questionKey
        );


    header.appendChild(
        button
    );


    const collapse =
        document.createElement("div");

    collapse.id =
        collapseId;

    collapse.className =
        "accordion-collapse collapse";

    collapse.dataset.bsParent =
        "#faqAccordion";

    collapse.setAttribute(
        "aria-labelledby",
        buttonId
    );


    const body =
        document.createElement("div");

    body.className =
        "accordion-body px-0 pt-0 pb-4 custom-accordion-body";

    body.textContent =
        translate(
            faq.answerKey
        );


    collapse.appendChild(
        body
    );


    item.appendChild(
        header
    );

    item.appendChild(
        collapse
    );


    return item;
}


function renderFaq() {
    if (!faqAccordion) {
        return;
    }

    faqAccordion.innerHTML = "";

    faqData.forEach((faq) => {
        faqAccordion.appendChild(
            createFaqItem(faq)
        );
    });
}


document.addEventListener(
    "DOMContentLoaded",
    renderFaq
);