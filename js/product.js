
// Product Page

import { products } from "../data/products.data.js";

import {
    getCurrentUser,
} from "./auth.js";

import {
    t,
    normalizeLanguage,
} from "./i18n.js";


const productContainer =
    document.querySelector(
        "#product-container"
    );


const CART_STORAGE_KEY =
    "coffee-shop-cart";

const REVIEWS_STORAGE_KEY =
    "coffee-shop-reviews";


const RELATED_PRODUCTS_LIMIT = 5;

const MAX_QUANTITY = 99;


let currentProduct = null;

let selectedSize = null;

let selectedType = null;

let quantity = 1;

let selectedReviewRating = 0;


// Get Current Language

function getCurrentLanguage() {
    const currentUser =
        getCurrentUser();

    return normalizeLanguage(
        currentUser?.preferences
            ?.language ??
        document.documentElement.lang
    );
}


// Get Product ID

function getProductId() {
    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        Number(
            params.get("id")
        );

    return Number.isInteger(id) &&
        id > 0
        ? id
        : null;
}


// Get Product

function getProductById(id) {
    return products.find(
        product =>
            product.id === id
    );
}


// Get Category Name

function getCategoryName(
    category,
    language
) {
    const translationKey =
        `shop.categoryNames.${category}`;

    const translatedCategory =
        t(
            translationKey,
            language
        );

    if (
        translatedCategory !==
        translationKey
    ) {
        return translatedCategory;
    }

    return category
        .replaceAll(
            "-",
            " "
        )
        .replace(
            /\b\w/g,
            letter =>
                letter.toUpperCase()
        );
}


// Get Type Name

function getTypeName(
    type,
    language
) {
    const translationKey =
        `product.typeNames.${type} `;

    const translatedType =
        t(
            translationKey,
            language
        );

    if (
        translatedType !==
        translationKey
    ) {
        return translatedType;
    }

    return type
        .replaceAll(
            "-",
            " "
        )
        .replace(
            /\b\w/g,
            letter =>
                letter.toUpperCase()
        );
}


// Get Variant Options

function getVariantOptions(
    product
) {
    const sizes = [
        ...new Set(
            product.variants.map(
                variant =>
                    variant.size
            )
        ),
    ];

    const types = [
        ...new Set(
            product.variants.map(
                variant =>
                    variant.type
            )
        ),
    ];

    return {
        sizes,
        types,
    };
}


// Get Matching Variant

function getMatchingVariant() {
    if (!currentProduct) {
        return null;
    }

    if (
        selectedSize === null ||
        selectedType === null
    ) {
        return null;
    }

    return (
        currentProduct.variants.find(
            variant =>
                variant.size ===
                selectedSize &&
                variant.type ===
                selectedType
        ) || null
    );
}


// Update Option Buttons

function updateOptionButtons() {
    document
        .querySelectorAll(
            "[data-size]"
        )
        .forEach(button => {
            button.classList.toggle(
                "selected",
                button.dataset.size ===
                selectedSize
            );
        });

    document
        .querySelectorAll(
            "[data-type]"
        )
        .forEach(button => {
            button.classList.toggle(
                "selected",
                button.dataset.type ===
                selectedType
            );
        });
}


// Update Price

function updatePrice() {
    const priceElement =
        document.querySelector(
            "#product-price"
        );

    if (!priceElement) {
        return;
    }

    const matchingVariant =
        getMatchingVariant();

    const language =
        getCurrentLanguage();

    priceElement.classList.remove(
        "price-pending",
        "price-unavailable",
        "price-available"
    );

    if (
        selectedSize === null ||
        selectedType === null
    ) {
        priceElement.textContent =
            t(
                "product.selectOptionsToViewPrice",
                language
            );

        priceElement.classList.add(
            "price-pending"
        );

        return;
    }

    if (!matchingVariant) {
        priceElement.textContent =
            t(
                "product.combinationUnavailable",
                language
            );

        priceElement.classList.add(
            "price-unavailable"
        );

        return;
    }

    priceElement.textContent =
        `$${matchingVariant.price.toFixed(2)} `;

    priceElement.classList.add(
        "price-available"
    );
}


// Update Quantity

function updateQuantity() {
    const quantityInput =
        document.querySelector(
            "#quantity-input"
        );

    const decreaseButton =
        document.querySelector(
            "#decrease-quantity"
        );

    if (
        !quantityInput ||
        !decreaseButton
    ) {
        return;
    }

    quantityInput.value =
        quantity;

    decreaseButton.disabled =
        quantity === 1;
}


// Increase Quantity

function increaseQuantity() {
    if (
        quantity >=
        MAX_QUANTITY
    ) {
        return;
    }

    quantity += 1;

    updateQuantity();
}


// Decrease Quantity

function decreaseQuantity() {
    if (
        quantity <= 1
    ) {
        return;
    }

    quantity -= 1;

    updateQuantity();
}


// Set Quantity From Input

function setQuantityFromInput() {
    const quantityInput =
        document.querySelector(
            "#quantity-input"
        );

    if (!quantityInput) {
        return;
    }

    const value =
        Number(
            quantityInput.value
        );

    if (
        !Number.isInteger(value)
    ) {
        quantity = 1;
    } else if (
        value < 1
    ) {
        quantity = 1;
    } else if (
        value > MAX_QUANTITY
    ) {
        quantity = MAX_QUANTITY;
    } else {
        quantity = value;
    }

    updateQuantity();
}


// Select Size

function selectSize(size) {
    selectedSize = size;

    updateOptionButtons();

    updatePrice();

    updateAddToCartButton();
}


// Select Type

function selectType(type) {
    selectedType = type;

    updateOptionButtons();

    updatePrice();

    updateAddToCartButton();
}


// Initialize Default Options

function initializeDefaultOptions() {
    const {
        sizes,
        types,
    } = getVariantOptions(
        currentProduct
    );

    selectedSize =
        sizes.length === 1
            ? sizes[0]
            : null;

    selectedType =
        types.length === 1
            ? types[0]
            : null;
}


// Get Cart

function getCart() {
    const storedCart =
        localStorage.getItem(
            CART_STORAGE_KEY
        );

    if (!storedCart) {
        return [];
    }

    try {
        const cart =
            JSON.parse(
                storedCart
            );

        return Array.isArray(cart)
            ? cart
            : [];
    } catch {
        return [];
    }
}


// Save Cart

function saveCart(cart) {
    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
    );
}


// Create Cart Item

function createCartItem(
    variant
) {
    return {
        productId:
            currentProduct.id,

        title:
            currentProduct.title,

        image:
            currentProduct.src,

        size:
            selectedSize,

        type:
            selectedType,

        quantity,

        unitPrice:
            variant.price,

        totalPrice:
            variant.price *
            quantity,
    };
}


// Find Existing Cart Item

function findCartItemIndex(
    cart
) {
    return cart.findIndex(
        item =>
            item.productId ===
            currentProduct.id &&
            item.size ===
            selectedSize &&
            item.type ===
            selectedType
    );
}


// Add To Cart

function addToCart() {
    const matchingVariant =
        getMatchingVariant();

    if (!matchingVariant) {
        return;
    }

    if (
        !Number.isInteger(
            quantity
        ) ||
        quantity < 1
    ) {
        quantity = 1;

        updateQuantity();

        return;
    }

    const cart =
        getCart();

    const existingItemIndex =
        findCartItemIndex(
            cart
        );

    if (
        existingItemIndex !== -1
    ) {
        const existingItem =
            cart[
            existingItemIndex
            ];

        existingItem.quantity +=
            quantity;

        existingItem.totalPrice =
            existingItem.unitPrice *
            existingItem.quantity;
    } else {
        cart.push(
            createCartItem(
                matchingVariant
            )
        );
    }

    saveCart(cart);

    showAddToCartFeedback();
}


// Update Add To Cart Button

function updateAddToCartButton() {
    const addToCartButton =
        document.querySelector(
            "#add-to-cart"
        );

    if (!addToCartButton) {
        return;
    }

    const matchingVariant =
        getMatchingVariant();

    const isAvailable =
        matchingVariant !== null;

    const language =
        getCurrentLanguage();

    addToCartButton.disabled =
        !isAvailable;

    addToCartButton.textContent =
        isAvailable
            ? t(
                "product.addToCart",
                language
            )
            : t(
                "product.selectOptions",
                language
            );

    addToCartButton.setAttribute(
        "aria-disabled",
        String(
            !isAvailable
        )
    );
}


// Add To Cart Feedback

function showAddToCartFeedback() {
    const addToCartButton =
        document.querySelector(
            "#add-to-cart"
        );

    if (!addToCartButton) {
        return;
    }

    const language =
        getCurrentLanguage();

    addToCartButton.textContent =
        t(
            "product.addedToCart",
            language
        );

    setTimeout(
        () => {
            if (
                !addToCartButton
                    .isConnected
            ) {
                return;
            }

            updateAddToCartButton();
        },
        1000
    );
}


// Get Stored Reviews

function getStoredReviews() {
    const storedReviews =
        localStorage.getItem(
            REVIEWS_STORAGE_KEY
        );

    if (!storedReviews) {
        return {};
    }

    try {
        const reviews =
            JSON.parse(
                storedReviews
            );

        return reviews &&
            typeof reviews ===
            "object" &&
            !Array.isArray(
                reviews
            )
            ? reviews
            : {};
    } catch {
        return {};
    }
}


// Get Product Reviews

function getProductReviews(
    product
) {
    const storedReviews =
        getStoredReviews();

    const productReviews =
        storedReviews[
        product.id
        ];

    const savedReviews =
        Array.isArray(
            productReviews
        )
            ? productReviews.filter(
                review =>
                    review &&
                    typeof review ===
                    "object"
            )
            : [];

    const baseReviews =
        Array.isArray(
            product.reviews
        )
            ? product.reviews.filter(
                review =>
                    review &&
                    typeof review ===
                    "object"
            )
            : [];

    return [
        ...baseReviews,
        ...savedReviews,
    ];
}


// Save Product Review

function saveProductReview(
    review
) {
    const storedReviews =
        getStoredReviews();

    if (
        !Array.isArray(
            storedReviews[
            currentProduct.id
            ]
        )
    ) {
        storedReviews[
            currentProduct.id
        ] = [];
    }

    storedReviews[
        currentProduct.id
    ].push(
        review
    );

    localStorage.setItem(
        REVIEWS_STORAGE_KEY,
        JSON.stringify(
            storedReviews
        )
    );
}


// Escape HTML

function escapeHTML(value) {
    return String(value)
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );
}


// Calculate Review Rating

function calculateReviewRating(
    reviews
) {
    if (
        !Array.isArray(
            reviews
        ) ||
        reviews.length === 0
    ) {
        return null;
    }

    const validRatings =
        reviews
            .map(
                review =>
                    Number(
                        review.rating
                    )
            )
            .filter(
                rating =>
                    Number.isFinite(
                        rating
                    ) &&
                    Number.isInteger(
                        rating
                    ) &&
                    rating >= 1 &&
                    rating <= 5
            );

    if (
        validRatings.length === 0
    ) {
        return null;
    }

    const totalRating =
        validRatings.reduce(
            (
                total,
                rating
            ) =>
                total + rating,
            0
        );

    return (
        totalRating /
        validRatings.length
    );
}


// Format Review Date

function formatReviewDate(
    date
) {
    const reviewDate =
        new Date(date);

    if (
        Number.isNaN(
            reviewDate.getTime()
        )
    ) {
        return "";
    }

    const language =
        getCurrentLanguage();

    const locale =
        language === "ar"
            ? "ar-EG"
            : "en-US";

    return reviewDate.toLocaleDateString(
        locale,
        {
            year: "numeric",
            month: "short",
            day: "numeric",
        }
    );
}


// Create Review Stars

function createReviewStars(
    rating
) {
    const roundedRating =
        Math.round(rating);

    return Array.from(
        {
            length: 5,
        },
        (_, index) =>
            index < roundedRating
                ? "★"
                : "☆"
    ).join("");
}


// Render Review Form

function renderReviewForm() {
    const language =
        getCurrentLanguage();

    return `
    <div class="review-form-wrapper" >

            <h3 class="review-form-title">
                ${t(
        "product.writeReview",
        language
    )}
            </h3>

            <form id="review-form">

                <div class="review-form-field">

                    <label
                        for="review-user"
                        class="review-form-label"
                    >
                        ${t(
        "product.yourName",
        language
    )}
                    </label>

                    <input
                        type="text"
                        id="review-user"
                        name="user"
                        class="review-form-input"
                        placeholder="${t(
        "product.reviewNamePlaceholder",
        language
    )}"
                        maxlength="50"
                        required
                    >

                    <small
                        id="review-user-error"
                        class="review-form-error"
                    ></small>

                </div>


                <fieldset
                    class="review-form-field"
                >

                    <legend
                        class="review-form-label"
                    >
                        ${t(
        "product.yourRating",
        language
    )}
                    </legend>

                    <div
                        class="review-rating-input"
                    >

                        ${[
            1,
            2,
            3,
            4,
            5,
        ]
            .map(
                rating => `
                                    <button
                                        type="button"
                                        class="
                                            review-rating-option
                                        "
                                        data-review-rating="${rating}"
                                        aria-label="${t(
                    "product.rateOutOf5",
                    language
                ).replace(
                    "{rating}",
                    rating
                )}"
                                        aria-pressed="false"
                                    >
                                        ★
                                    </button>
                                `
            )
            .join("")}

                    </div>

                    <small
                        id="review-rating-error"
                        class="review-form-error"
                    ></small>

                </fieldset>


                <div
                    class="review-form-field"
                >

                    <label
                        for="review-comment"
                        class="review-form-label"
                    >
                        ${t(
                "product.yourReview",
                language
            )}
                    </label>

                    <textarea
                        id="review-comment"
                        name="comment"
                        class="
                            review-form-input
                            review-form-textarea
                        "
                        placeholder="${t(
                "product.reviewCommentPlaceholder",
                language
            )}"
                        maxlength="500"
                        rows="5"
                        required
                    ></textarea>

                    <small
                        id="review-comment-error"
                        class="review-form-error"
                    ></small>

                </div>


                <button
                    type="submit"
                    class="review-submit-button"
                >
                    ${t(
                "product.submitReview",
                language
            )}
                </button>


                <p
                    id="review-form-success"
                    class="review-form-success"
                ></p>

            </form >

        </div >
    `;
}


// Render Reviews

function renderReviews(
    product
) {
    const language =
        getCurrentLanguage();

    const reviews =
        getProductReviews(
            product
        );

    const reviewForm =
        renderReviewForm();

    if (
        reviews.length === 0
    ) {
        return `
    <section
class="product-reviews"
    >

                <div
                    class="reviews-header"
                >

                    <h2 class="reviews-title">
                        ${t(
            "product.customerReviews",
            language
        )}
                    </h2>

                    <p class="reviews-count">
                        ${t(
            "product.noReviewsYet",
            language
        )}
                    </p>

                </div>


                <div class="reviews-empty">

                    <h3>
                        ${t(
            "product.noReviewsYet",
            language
        )}
                    </h3>

                    <p>
                        ${t(
            "product.beFirstToReview",
            language
        )}
                    </p>

                </div>


                ${reviewForm}

            </section >
    `;
    }

    const averageRating =
        calculateReviewRating(
            reviews
        );

    return `
    <section
class="product-reviews"
    >

    <div
        class="
                    reviews-header
                    d-flex
                    flex-column
                    flex-md-row
                    justify-content-between
                    align-items-md-center
                    gap-3
                "
    >

        <div>

            <h2
                class="reviews-title"
            >
                ${t(
        "product.customerReviews",
        language
    )}
            </h2>

            <p class="reviews-count">
                ${reviews.length
        }
                ${reviews.length === 1
            ? t(
                "product.review",
                language
            )
            : t(
                "product.reviews",
                language
            )
        }
            </p>

        </div>


        <div
            class="reviews-summary"
        >

            <span
                class="reviews-average"
            >
                ${averageRating.toFixed(
            1
        )}
            </span>

            <span
                class="reviews-stars"
                aria-label="${t(
            "product.ratingAria",
            language
        ).replace(
            "{rating}",
            averageRating.toFixed(
                1
            )
        )}"
                    >
            ${createReviewStars(
            averageRating
        )}
        </span>

    </div>

            </div >


    <div
        class="reviews-list"
    >

        ${reviews
            .map(
                review => `
                            <article
                                class="review-card"
                            >

                                <div
                                    class="
                                        review-card-header
                                        d-flex
                                        justify-content-between
                                        align-items-start
                                        gap-3
                                    "
                                >

                                    <div>

                                        <h3
                                            class="review-user"
                                        >
                                            ${escapeHTML(
                    review.user
                )}
                                        </h3>

                                        <div
                                            class="review-rating"
                                            aria-label="${t(
                    "product.ratingAria",
                    language
                ).replace(
                    "{rating}",
                    review.rating
                )}"
                                        >
                                            ${createReviewStars(
                    review.rating
                )}
                                        </div>

                                    </div>


                                    <time
                                        class="review-date"
                                        datetime="${escapeHTML(
                    review.date
                )}"
                                    >
                                        ${formatReviewDate(
                    review.date
                )}
                                    </time>

                                </div>


                                <p
                                    class="review-comment"
                                >
                                    ${escapeHTML(
                    review.comment
                )}
                                </p>

                            </article>
                        `
            )
            .join("")}

    </div>


            ${reviewForm}

        </section >
    `;
}


// Set Review Rating

function setReviewRating(
    rating
) {
    selectedReviewRating =
        Number(rating);

    document
        .querySelectorAll(
            ".review-rating-option"
        )
        .forEach(button => {
            const buttonRating =
                Number(
                    button.dataset
                        .reviewRating
                );

            const isSelected =
                buttonRating <=
                selectedReviewRating;

            button.classList.toggle(
                "selected",
                isSelected
            );

            button.setAttribute(
                "aria-pressed",
                String(
                    buttonRating ===
                    selectedReviewRating
                )
            );
        });

    const ratingError =
        document.querySelector(
            "#review-rating-error"
        );

    if (ratingError) {
        ratingError.textContent =
            "";

        ratingError.classList.remove(
            "visible"
        );
    }
}


// Validate Review

function validateReview(
    user,
    comment
) {
    const language =
        getCurrentLanguage();

    const userError =
        document.querySelector(
            "#review-user-error"
        );

    const ratingError =
        document.querySelector(
            "#review-rating-error"
        );

    const commentError =
        document.querySelector(
            "#review-comment-error"
        );

    userError.textContent =
        "";

    ratingError.textContent =
        "";

    commentError.textContent =
        "";

    userError.classList.remove(
        "visible"
    );

    ratingError.classList.remove(
        "visible"
    );

    commentError.classList.remove(
        "visible"
    );

    let isValid = true;

    if (
        user.length < 2 ||
        user.length > 50
    ) {
        userError.textContent =
            t(
                "product.reviewNameLength",
                language
            );

        userError.classList.add(
            "visible"
        );

        isValid = false;
    }

    if (
        !Number.isInteger(
            selectedReviewRating
        ) ||
        selectedReviewRating < 1 ||
        selectedReviewRating > 5
    ) {
        ratingError.textContent =
            t(
                "product.selectRating",
                language
            );

        ratingError.classList.add(
            "visible"
        );

        isValid = false;
    }

    if (
        comment.length < 5 ||
        comment.length > 500
    ) {
        commentError.textContent =
            t(
                "product.reviewCommentLength",
                language
            );

        commentError.classList.add(
            "visible"
        );

        isValid = false;
    }

    return isValid;
}


// Add Review

function addReview(event) {
    event.preventDefault();

    const form =
        event.currentTarget;

    const user =
        form.elements.user.value.trim();

    const comment =
        form.elements.comment.value.trim();

    const isValid =
        validateReview(
            user,
            comment
        );

    if (!isValid) {
        return;
    }

    const review = {
        id: Date.now(),

        user,

        rating:
            selectedReviewRating,

        comment,

        date:
            new Date()
                .toISOString()
                .split("T")[0],
    };

    saveProductReview(
        review
    );

    selectedReviewRating = 0;

    const reviewsSection =
        document.querySelector(
            ".product-reviews"
        );

    if (!reviewsSection) {
        return;
    }

    reviewsSection.outerHTML =
        renderReviews(
            currentProduct
        );

    addReviewEvents();

    const successMessage =
        document.querySelector(
            "#review-form-success"
        );

    if (successMessage) {
        const language =
            getCurrentLanguage();

        successMessage.textContent =
            t(
                "product.reviewAdded",
                language
            );

        successMessage.classList.add(
            "visible"
        );
    }
}


// Add Review Events

function addReviewEvents() {
    const reviewForm =
        document.querySelector(
            "#review-form"
        );

    if (!reviewForm) {
        return;
    }

    document
        .querySelectorAll(
            ".review-rating-option"
        )
        .forEach(button => {
            button.addEventListener(
                "click",
                () => {
                    setReviewRating(
                        button.dataset
                            .reviewRating
                    );
                }
            );
        });

    reviewForm.addEventListener(
        "submit",
        addReview
    );
}


// Render Variant Options

function renderVariantOptions(
    product
) {
    const language =
        getCurrentLanguage();

    const {
        sizes,
        types,
    } =
        getVariantOptions(
            product
        );

    let optionsHTML =
        "";

    if (
        sizes.length > 0
    ) {
        optionsHTML += `
    <fieldset
class="product-option-group">

                <legend
                    class="product-option-title">
                    ${t(
            "product.size",
            language
        )}
                </legend>

                <div
                    class="product-options">

                    ${sizes
                .map(
                    size => `
                                <button
                                    type="button"
                                    class="product-option"
                                    data-size="${size}"
                                >
                                    ${size}
                                </button>
                            `
                )
                .join("")}

                </div>

            </fieldset >
    `;
    }

    if (
        types.length > 0
    ) {
        optionsHTML += `
    <fieldset
class="product-option-group"
    >

                <legend
                    class="product-option-title"
                >
                    ${t(
            "product.type",
            language
        )}
                </legend>

                <div
                    class="product-options"
                >

                    ${types
                .map(
                    type => `
                                <button
                                    type="button"
                                    class="product-option"
                                    data-type="${type}"
                                >
                                    ${getTypeName(
                        type,
                        language
                    )}
                                </button>
                            `
                )
                .join("")}

                </div>

            </fieldset >
    `;
    }

    return optionsHTML;
}


// Render Quantity

function renderQuantity() {
    const language =
        getCurrentLanguage();

    return `
    <div
class="product-quantity"
    >

            <span
                class="product-option-title"
            >
                ${t(
        "product.quantity",
        language
    )}
            </span>


            <div
                class="quantity-control"
            >

                <button
                    type="button"
                    id="decrease-quantity"
                    class="quantity-button"
                    aria-label="${t(
        "product.decreaseQuantity",
        language
    )}"
                >
                    −
                </button>


                <input
                    type="number"
                    id="quantity-input"
                    class="quantity-input"
                    value="1"
                    min="1"
                    max="${MAX_QUANTITY}"
                    step="1"
                    inputmode="numeric"
                    aria-label="${t(
        "product.quantity",
        language
    )}"
    >


    <button
        type="button"
        id="increase-quantity"
        class="quantity-button"
        aria-label="${t(
        "product.increaseQuantity",
        language
    )}"
    >
    +
                </button >

            </div >

        </div >
    `;
}


// Add Option Events

function addOptionEvents() {
    document
        .querySelectorAll(
            "[data-size]"
        )
        .forEach(button => {
            button.addEventListener(
                "click",
                () => {
                    selectSize(
                        button.dataset.size
                    );
                }
            );
        });

    document
        .querySelectorAll(
            "[data-type]"
        )
        .forEach(button => {
            button.addEventListener(
                "click",
                () => {
                    selectType(
                        button.dataset.type
                    );
                }
            );
        });
}


// Add Quantity Events

function addQuantityEvents() {
    const decreaseButton =
        document.querySelector(
            "#decrease-quantity"
        );

    const increaseButton =
        document.querySelector(
            "#increase-quantity"
        );

    const quantityInput =
        document.querySelector(
            "#quantity-input"
        );

    if (
        !decreaseButton ||
        !increaseButton ||
        !quantityInput
    ) {
        return;
    }

    decreaseButton.addEventListener(
        "click",
        decreaseQuantity
    );

    increaseButton.addEventListener(
        "click",
        increaseQuantity
    );

    quantityInput.addEventListener(
        "input",
        setQuantityFromInput
    );

    quantityInput.addEventListener(
        "blur",
        setQuantityFromInput
    );
}


// Add Cart Event

function addCartEvent() {
    const addToCartButton =
        document.querySelector(
            "#add-to-cart"
        );

    if (!addToCartButton) {
        return;
    }

    addToCartButton.addEventListener(
        "click",
        addToCart
    );
}


// Get Price Range

function getPriceRange(
    product
) {
    const prices =
        product.variants
            .map(
                variant =>
                    Number(
                        variant.price
                    )
            )
            .filter(
                price =>
                    Number.isFinite(
                        price
                    )
            );

    if (
        prices.length === 0
    ) {
        return null;
    }

    return {
        min: Math.min(
            ...prices
        ),

        max: Math.max(
            ...prices
        ),
    };
}


// Create Related Product Card

function createRelatedProductCard(
    product
) {
    const language =
        getCurrentLanguage();

    const priceRange =
        getPriceRange(
            product
        );

    const price =
        priceRange
            ? priceRange.min ===
                priceRange.max
                ? `$${priceRange.min.toFixed(
                    2
                )
                } `
                : `$${priceRange.min.toFixed(
                    2
                )
                } – $${priceRange.max.toFixed(
                    2
                )
                } `
            : t(
                "product.priceUnavailable",
                language
            );

    const categoryName =
        getCategoryName(
            product.category,
            language
        );
    console.log(
        "Product Language:",
        language
    );

    console.log(
        "Product Category:",
        product.category
    );

    console.log(
        "Translated Category:",
        categoryName
    );

    const ratingLabel =
        t(
            "product.ratingAria",
            language
        ).replace(
            "{rating}",
            product.rating
        );

    return `
    <div
class="
col - 12
col - sm - 6
col - md - 4
col - lg - 3
"
    >

    <a
        href="product.html?id=${product.id}"
        class="related-product-link"
    >

        <article
            class="related-product-card"
        >

            <div
                class="
                            ratio
                            ratio-1x1
                            related-product-image-wrapper
                        "
            >

                <img
                    src="${product.src}"
                    alt="${product.title}"
                    class="
                                related-product-image
                            "
                >

            </div>


            <div
                class="
                            related-product-content
                        "
            >

                <span
                    class="
                                related-product-category
                            "
                >
                    ${categoryName}
                </span>


                <h3
                    class="
                                related-product-title
                            "
                >
                    ${product.title}
                </h3>


                <div
                    class="
                                d-flex
                                justify-content-between
                                align-items-center
                                gap-2
                            "
                >

                    <span
                        class="
                                    related-product-price
                                "
                    >
                        ${price}
                    </span>


                    <span
                        class="
                                    related-product-rating
                                "
                        aria-label="${ratingLabel}"
                    >
                        ★ ${product.rating}
                    </span>

                </div>

            </div>

        </article>

    </a>

        </div >
    `;
}


// Get Related Products

function getRelatedProducts(
    product
) {
    return products
        .filter(
            relatedProduct =>
                relatedProduct.category ===
                product.category &&
                relatedProduct.id !==
                product.id
        )
        .slice(
            0,
            RELATED_PRODUCTS_LIMIT
        );
}


// Render Related Products

function renderRelatedProducts(
    product
) {
    const language =
        getCurrentLanguage();

    const relatedProducts =
        getRelatedProducts(
            product
        );

    if (
        relatedProducts.length ===
        0
    ) {
        return "";
    }

    const categoryName =
        getCategoryName(
            product.category,
            language
        );
    console.log(
        "Product Language:",
        language
    );

    console.log(
        "Product Category:",
        product.category
    );

    console.log(
        "Translated Category:",
        categoryName
    );

    return `
    <section
class="
related - products
animate__animated
animate__fadeInUp
"
    >

            <div
                class="related-products-header"
            >

                <span
                    class="related-products-label"
                >
                    ${t(
        "product.youMayAlsoLike",
        language
    )}
                </span>


                <h2
                    class="related-products-title"
                >
                    ${t(
        "product.moreCategory",
        language
    ).replace(
        "{category}",
        categoryName
    )}
                </h2>


                <p
                    class="
                        related-products-description
                    "
                >
                    ${t(
        "product.sameCategoryDescription",
        language
    )}
                </p>

            </div>


            <div class="row g-4">

                ${relatedProducts
            .map(
                relatedProduct =>
                    createRelatedProductCard(
                        relatedProduct
                    )
            )
            .join("")}

            </div>

        </section >
    `;
}


// Render Product

function renderProduct(
    product
) {
    currentProduct =
        product;

    selectedSize = null;

    selectedType = null;

    quantity = 1;

    selectedReviewRating = 0;

    initializeDefaultOptions();

    const language =
        getCurrentLanguage();

    const variantOptions =
        renderVariantOptions(
            product
        );

    const quantityHTML =
        renderQuantity();

    const categoryName =
        getCategoryName(
            product.category,
            language
        );
    console.log(
        "Product Language:",
        language
    );

    console.log(
        "Product Category:",
        product.category
    );

    console.log(
        "Translated Category:",
        categoryName
    );

    const ratingLabel =
        t(
            "product.ratingAria",
            language
        ).replace(
            "{rating}",
            product.rating
        );

    const isArabic =
        getCurrentLanguage() === "ar";

    const imageAnimation =
        isArabic
            ? "animate__fadeInRight"
            : "animate__fadeInLeft";

    const contentAnimation =
        isArabic
            ? "animate__fadeInLeft"
            : "animate__fadeInRight";

    productContainer.innerHTML = `
    <article
class="product-details"
    >

    <div
        class="
                    row
                    g-5
                    align-items-center
                "
    >

        <div
            class="
                        col-12
                        col-lg-6
                    "
        >

            <div
                class="
                            product-details-image-wrapper
                            animate__animated
                            ${imageAnimation}
                        "
            >

                <img
                    src="${product.src}"
                    alt="${product.title}"
                    class="
                                product-details-image
                            "
                >

            </div>

        </div>


        <div
            class="
                        col-12
                        col-lg-6
                    "
        >

            <div
                class="
                            product-details-content
                            animate__animated
                            ${contentAnimation}
                        "
            >

                <span
                    class="
                                product-details-category
                            "
                >
                    ${categoryName}
                </span>


                <h1
                    class="
                                product-details-title
                            "
                >
                    ${product.title}
                </h1>


                <div
                    class="
                                product-details-rating
                            "
                    aria-label="${ratingLabel}"
                >
                    ★ ${product.rating}
                </div>


                <div
                    id="product-options"
                    class="
                                product-options-wrapper
                            "
                >
                    ${variantOptions}
                </div>


                ${quantityHTML}


                <p
                    id="product-price"
                    class="
                                product-details-price
                            "
                ></p>


                <p
                    class="
                                product-details-description
                            "
                >
                    ${product.description}
                </p>


                <div
                    class="
                                product-details-actions
                            "
                >

                    <button
                        type="button"
                        id="add-to-cart"
                        class="
                                    product-action-button
                                "
                        disabled
                    >
                        ${t(
        "product.selectOptions",
        language
    )}
                    </button>

                </div>

            </div>

        </div>

    </div>

        </article >


    ${renderReviews(
        product
    )
        }


        ${renderRelatedProducts(
            product
        )
        }
`;

    addOptionEvents();

    addQuantityEvents();

    addCartEvent();

    addReviewEvents();

    updateOptionButtons();

    updateQuantity();

    updatePrice();

    updateAddToCartButton();
}


// Render Not Found

function renderNotFound() {
    const language =
        getCurrentLanguage();

    productContainer.innerHTML = `
    <div
class="
product - not - found
animate__animated
animate__fadeIn
"
    >

            <h1>
                ${t(
        "product.notFound",
        language
    )}
            </h1>


            <p>
                ${t(
        "product.notFoundDescription",
        language
    )}
            </p>


            <a
                href="shop.html"
                class="back-to-shop"
            >
                ${t(
        "product.backToShop",
        language
    )}
            </a>

        </div >
    `;
}


// Initialize

function initProductPage() {
    const productId =
        getProductId();

    if (
        productId === null
    ) {
        renderNotFound();
        return;
    }

    const product =
        getProductById(
            productId
        );

    if (!product) {
        renderNotFound();
        return;
    }

    renderProduct(
        product
    );
}


initProductPage();
