import {
    t,
    applyLanguage,
    normalizeLanguage
} from "./i18n.js";

import {
    journalCategories,
    journalPosts
} from "../data/journal.data.js";


const articlesGrid =
    document.getElementById(
        "articlesGrid"
    );

const categoryContainer =
    document.getElementById(
        "categoryContainer"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const trendingList =
    document.getElementById(
        "trendingList"
    );

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


let activeCategory = "all";

let likesState = {};

try {
    const storedLikes =
        localStorage.getItem(
            "journal_likes"
        );

    if (storedLikes) {
        const parsedLikes =
            JSON.parse(storedLikes);

        if (
            parsedLikes &&
            typeof parsedLikes === "object" &&
            !Array.isArray(parsedLikes)
        ) {
            likesState = parsedLikes;
        }
    }
} catch {
    likesState = {};
}


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
            month: "short",
            day: "numeric"
        }
    ).format(date);
}


function getPostTitle(post) {
    return translate(
        post.titleKey
    );
}


function getPostExcerpt(post) {
    return translate(
        post.excerptKey
    );
}


function getCategoryLabel(category) {
    return translate(
        `journal.categories.${category}`
    );
}


function createCategoryButtons() {
    if (!categoryContainer) {
        return;
    }

    categoryContainer.innerHTML = "";

    const language =
        getCurrentLanguage();

    journalCategories.forEach(
        (category) => {
            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

            button.className =
                "filter-btn";

            if (
                category ===
                activeCategory
            ) {
                button.classList.add(
                    "active"
                );
            }

            button.textContent = t(
                `journal.categories.${category}`,
                language
            );

            button.addEventListener(
                "click",
                () => {
                    activeCategory =
                        category;

                    createCategoryButtons();

                    applyFilters();
                }
            );

            categoryContainer.appendChild(
                button
            );
        }
    );
}


function createArticleCard(post) {
    const article =
        document.createElement(
            "article"
        );

    article.className =
        "article-card";


    const articleImage =
        document.createElement(
            "div"
        );

    articleImage.className =
        "article-img";


    const image =
        document.createElement(
            "img"
        );

    image.src =
        post.image;

    image.alt =
        getPostTitle(post);


    const badge =
        document.createElement(
            "span"
        );

    badge.className =
        "article-badge";

    badge.textContent =
        getCategoryLabel(
            post.category
        );


    articleImage.appendChild(
        image
    );

    articleImage.appendChild(
        badge
    );


    const content =
        document.createElement(
            "div"
        );

    content.className =
        "article-content";


    const meta =
        document.createElement(
            "div"
        );

    meta.className =
        "article-meta";


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
        ` ${formatDate(post.date)}`
    );


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
        ` ${post.author}`
    );


    meta.appendChild(
        date
    );

    meta.appendChild(
        author
    );


    const title =
        document.createElement(
            "h2"
        );

    title.className =
        "article-title";

    title.textContent =
        getPostTitle(post);


    const excerpt =
        document.createElement(
            "p"
        );

    excerpt.className =
        "article-excerpt";

    excerpt.textContent =
        getPostExcerpt(post);


    const footer =
        document.createElement(
            "div"
        );

    footer.className =
        "article-footer";


    const readMore =
        document.createElement(
            "a"
        );

    readMore.href =
        `article.html?id=${post.id}`;

    readMore.className =
        "read-more";

    readMore.textContent =
        translate(
            "journal.readMore"
        );


    const arrow =
        document.createElement(
            "i"
        );

    arrow.className =
        "fa-solid fa-arrow-right";

    readMore.appendChild(
        document.createTextNode(
            " "
        )
    );

    readMore.appendChild(
        arrow
    );


    const likeButton =
        document.createElement(
            "button"
        );

    likeButton.type =
        "button";

    likeButton.className =
        "like-btn";


    const isLiked =
        Boolean(
            likesState[post.id]
        );


    if (isLiked) {
        likeButton.classList.add(
            "liked"
        );
    }


    const likeIcon =
        document.createElement(
            "i"
        );

    likeIcon.className =
        isLiked
            ? "fa-solid fa-heart"
            : "fa-regular fa-heart";


    const likeCount =
        document.createElement(
            "span"
        );

    const baseLikes =
        Number.isFinite(post.likes)
            ? post.likes
            : 0;

    likeCount.textContent =
        String(
            baseLikes +
            (isLiked ? 1 : 0)
        );


    likeButton.setAttribute(
        "aria-label",
        isLiked
            ? translate(
                "journal.unlikeArticle"
            )
            : translate(
                "journal.likeArticle"
            )
    );


    likeButton.appendChild(
        likeIcon
    );

    likeButton.appendChild(
        likeCount
    );


    likeButton.addEventListener(
        "click",
        () => {
            likesState[post.id] =
                !likesState[post.id];

            localStorage.setItem(
                "journal_likes",
                JSON.stringify(
                    likesState
                )
            );

            applyFilters();

            renderTrending();
        }
    );


    footer.appendChild(
        readMore
    );

    footer.appendChild(
        likeButton
    );


    content.appendChild(
        meta
    );

    content.appendChild(
        title
    );

    content.appendChild(
        excerpt
    );

    content.appendChild(
        footer
    );


    article.appendChild(
        articleImage
    );

    article.appendChild(
        content
    );


    return article;
}


function renderArticles(data) {
    if (!articlesGrid) {
        return;
    }

    articlesGrid.innerHTML = "";


    if (data.length === 0) {
        const emptyMessage =
            document.createElement(
                "p"
            );

        emptyMessage.className =
            "no-articles-message";

        emptyMessage.textContent =
            translate(
                "journal.noArticles"
            );

        articlesGrid.appendChild(
            emptyMessage
        );

        return;
    }


    data.forEach((post) => {
        articlesGrid.appendChild(
            createArticleCard(
                post
            )
        );
    });
}


function renderTrending() {
    if (!trendingList) {
        return;
    }

    trendingList.innerHTML = "";


    const sorted =
        [...journalPosts]
            .sort((a, b) => {
                const likesA =
                    Number.isFinite(
                        a.likes
                    )
                        ? a.likes +
                        (likesState[a.id]
                            ? 1
                            : 0)
                        : 0;

                const likesB =
                    Number.isFinite(
                        b.likes
                    )
                        ? b.likes +
                        (likesState[b.id]
                            ? 1
                            : 0)
                        : 0;

                if (
                    likesB !==
                    likesA
                ) {
                    return likesB - likesA;
                }

                return (
                    new Date(
                        b.date
                    ) -
                    new Date(
                        a.date
                    )
                );
            })
            .slice(0, 2);


    sorted.forEach((post) => {
        const item =
            document.createElement(
                "li"
            );

        item.className =
            "trending-item";


        const image =
            document.createElement(
                "img"
            );

        image.src =
            post.image;

        image.alt =
            getPostTitle(post);

        image.className =
            "trending-img";


        const info =
            document.createElement(
                "div"
            );

        info.className =
            "trending-info";


        const title =
            document.createElement(
                "h4"
            );


        const link =
            document.createElement(
                "a"
            );

        link.href =
            "#";

        link.textContent =
            getPostTitle(post);

        link.addEventListener(
            "click",
            (event) => {
                event.preventDefault();
            }
        );


        title.appendChild(
            link
        );


        const date =
            document.createElement(
                "span"
            );

        date.className =
            "trending-date";

        date.textContent =
            formatDate(
                post.date
            );


        info.appendChild(
            title
        );

        info.appendChild(
            date
        );


        item.appendChild(
            image
        );

        item.appendChild(
            info
        );


        trendingList.appendChild(
            item
        );
    });
}


function applyFilters() {
    const language =
        getCurrentLanguage();

    const searchValue =
        searchInput
            ? searchInput.value
                .trim()
                .toLocaleLowerCase(
                    language === "ar"
                        ? "ar"
                        : "en"
                )
            : "";


    const filtered =
        journalPosts.filter(
            (post) => {
                const matchesCategory =
                    activeCategory ===
                    "all" ||
                    post.category ===
                    activeCategory;


                const title =
                    getPostTitle(
                        post
                    ).toLocaleLowerCase(
                        language === "ar"
                            ? "ar"
                            : "en"
                    );


                const excerpt =
                    getPostExcerpt(
                        post
                    ).toLocaleLowerCase(
                        language === "ar"
                            ? "ar"
                            : "en"
                    );


                const matchesSearch =
                    title.includes(
                        searchValue
                    ) ||
                    excerpt.includes(
                        searchValue
                    );


                return (
                    matchesCategory &&
                    matchesSearch
                );
            }
        );


    renderArticles(
        filtered
    );
}


function updateMeta() {
    const language =
        getCurrentLanguage();


    const description =
        document.querySelector(
            'meta[name="description"]'
        );


    if (description) {
        description.content =
            t(
                "meta.journalDescription",
                language
            );
    }
}


function handleSearch() {
    applyFilters();
}


function initializeNewsletter() {
    if (!newsletterForm) {
        return;
    }

    newsletterForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            alert(
                translate(
                    "journal.subscribeSuccess"
                )
            );

            newsletterForm.reset();
        }
    );
}


function initializeJournal() {
    createCategoryButtons();

    applyFilters();

    renderTrending();

    initializeNewsletter();

    updateMeta();

    applyLanguage(
        getCurrentLanguage()
    );
}


if (searchInput) {
    searchInput.addEventListener(
        "input",
        handleSearch
    );
}


document.addEventListener(
    "DOMContentLoaded",
    initializeJournal
);