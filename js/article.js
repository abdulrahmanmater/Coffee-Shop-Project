import {
    journalPosts
} from "../data/journal.data.js";

import {
    t,
    normalizeLanguage
} from "./i18n.js";


const articleDetails =
    document.getElementById(
        "articleDetails"
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


function formatDate(dateString) {
    const language =
        getCurrentLanguage();

    const locale =
        language === "ar"
            ? "ar-EG"
            : "en-US";

    const date =
        new Date(
            `${dateString}T00:00:00`
        );

    return new Intl.DateTimeFormat(
        locale,
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    ).format(date);
}


function getArticleId() {
    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        Number(
            params.get("id")
        );

    return Number.isInteger(id)
        ? id
        : null;
}


function getArticle() {
    const articleId =
        getArticleId();

    if (articleId === null) {
        return null;
    }

    return journalPosts.find(
        (post) =>
            post.id === articleId
    );
}


function renderArticle(article) {
    if (!articleDetails) {
        return;
    }

    articleDetails.innerHTML = "";

    const wrapper =
        document.createElement(
            "div"
        );

    wrapper.className =
        "article-details-wrapper";


    const image =
        document.createElement(
            "img"
        );

    image.className =
        "article-details-image";

    image.src =
        article.image;

    image.alt =
        translate(
            article.titleKey
        );


    const content =
        document.createElement(
            "div"
        );

    content.className =
        "article-details-content";


    const category =
        document.createElement(
            "span"
        );

    category.className =
        "article-details-category";

    category.textContent =
        translate(
            `journal.categories.${article.category}`
        );


    const title =
        document.createElement(
            "h1"
        );

    title.className =
        "article-details-title";

    title.textContent =
        translate(
            article.titleKey
        );


    const meta =
        document.createElement(
            "div"
        );

    meta.className =
        "article-details-meta";


    const author =
        document.createElement(
            "span"
        );

    const authorIcon =
        document.createElement(
            "i"
        );

    authorIcon.className =
        "fa-regular fa-user";

    author.appendChild(
        authorIcon
    );

    author.append(
        ` ${article.author}`
    );


    const date =
        document.createElement(
            "span"
        );

    const dateIcon =
        document.createElement(
            "i"
        );

    dateIcon.className =
        "fa-regular fa-calendar";

    date.appendChild(
        dateIcon
    );

    date.append(
        ` ${formatDate(article.date)}`
    );


    const readTime =
        document.createElement(
            "span"
        );

    const clockIcon =
        document.createElement(
            "i"
        );

    clockIcon.className =
        "fa-regular fa-clock";

    readTime.appendChild(
        clockIcon
    );

    readTime.append(
        ` ${article.readTime} ${translate(
            "journal.minRead"
        )}`
    );


    meta.appendChild(
        author
    );

    meta.appendChild(
        date
    );

    meta.appendChild(
        readTime
    );


    const body =
        document.createElement(
            "div"
        );

    body.className =
        "article-details-body";


    article.contentKeys.forEach(
        (contentKey) => {
            const paragraph =
                document.createElement(
                    "p"
                );

            paragraph.textContent =
                translate(
                    contentKey
                );

            body.appendChild(
                paragraph
            );
        }
    );


    const backLink =
        document.createElement(
            "a"
        );

    backLink.href =
        "journal.html";

    backLink.className =
        "article-back-link";


    const backIcon =
        document.createElement(
            "i"
        );

    backIcon.className =
        "fa-solid fa-arrow-left";


    const backText =
        document.createTextNode(
            ` ${translate(
                "journal.backToJournal"
            )}`
        );


    backLink.appendChild(
        backIcon
    );

    backLink.appendChild(
        backText
    );


    content.appendChild(
        category
    );

    content.appendChild(
        title
    );

    content.appendChild(
        meta
    );

    content.appendChild(
        body
    );

    content.appendChild(
        backLink
    );


    wrapper.appendChild(
        image
    );

    wrapper.appendChild(
        content
    );

    articleDetails.appendChild(
        wrapper
    );


    document.title =
        translate(
            "meta.articleTitle"
        );
}


function renderNotFound() {
    if (!articleDetails) {
        return;
    }

    articleDetails.innerHTML = "";

    const message =
        document.createElement(
            "div"
        );

    message.className =
        "article-not-found";


    const title =
        document.createElement(
            "h1"
        );

    title.textContent =
        translate(
            "journal.articleNotFound"
        );


    const link =
        document.createElement(
            "a"
        );

    link.href =
        "journal.html";

    link.className =
        "article-back-link";

    link.textContent =
        translate(
            "journal.backToJournal"
        );


    message.appendChild(
        title
    );

    message.appendChild(
        link
    );


    articleDetails.appendChild(
        message
    );
}


function updateMetaDescription(article) {
    const description =
        document.querySelector(
            'meta[name="description"]'
        );

    if (!description) {
        return;
    }

    if (!article) {
        description.content =
            translate(
                "journal.articleNotFound"
            );

        return;
    }

    description.content =
        translate(
            article.excerptKey
        );
}


document.addEventListener(
    "DOMContentLoaded",
    () => {
        const article =
            getArticle();

        if (article) {
            renderArticle(
                article
            );
        } else {
            renderNotFound();
        }

        updateMetaDescription(
            article
        );
    }
);