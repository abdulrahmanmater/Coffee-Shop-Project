// shop.js

import { products } from "../data/products.data.js";

const productsSection = document.querySelector(".products-section");
const categoriesFilter = document.querySelector("#categories-filter");
const filterForm = document.querySelector("#filter-form");
const resetFiltersButton = document.querySelector("#reset-filters");
const minPriceInput = document.querySelector("#min-price");
const maxPriceInput = document.querySelector("#max-price");
const filterError = document.querySelector("#filter-error");
const sortSelect = document.querySelector("#sort-select");
const resultsCount = document.querySelector("#results-count");
const pagination = document.querySelector("#pagination");

const PRODUCTS_PER_PAGE = 12;

const SORT_OPTIONS = [
    "default",
    "price-asc",
    "price-desc",
    "latest",
    "rating",
];

// Get Categories

const categories = [
    ...new Set(products.map(product => product.category)),
].sort();

// Format Category Name

function formatCategoryName(category) {
    return category
        .replaceAll("-", " ")
        .replace(/\b\w/g, letter => letter.toUpperCase());
}

// Get State From URL

// Get State From URL

function getStateFromURL() {
    const params = new URLSearchParams(window.location.search);

    const minPriceValue = params.get("minPrice");
    const maxPriceValue = params.get("maxPrice");
    const page = Number(params.get("page"));

    const sort = params.get("sort");

    return {
        categories: [
            ...new Set(
                params
                    .getAll("category")
                    .filter(category => categories.includes(category))
            ),
        ],

        minPrice:
            minPriceValue !== null &&
                Number.isFinite(Number(minPriceValue)) &&
                Number(minPriceValue) >= 0
                ? Number(minPriceValue)
                : null,

        maxPrice:
            maxPriceValue !== null &&
                Number.isFinite(Number(maxPriceValue)) &&
                Number(maxPriceValue) >= 0
                ? Number(maxPriceValue)
                : null,

        sort: SORT_OPTIONS.includes(sort)
            ? sort
            : "default",

        page:
            Number.isInteger(page) && page > 0
                ? page
                : 1,
    };
}

// Update URL

function updateURL(state, replace = false) {
    const params = new URLSearchParams();

    [...new Set(state.categories)].forEach(category => {
        params.append("category", category);
    });

    if (state.minPrice !== null) {
        params.set("minPrice", state.minPrice);
    }

    if (state.maxPrice !== null) {
        params.set("maxPrice", state.maxPrice);
    }

    if (state.sort !== "default") {
        params.set("sort", state.sort);
    }

    if (state.page > 1) {
        params.set("page", state.page);
    }

    const queryString = params.toString();

    const url = queryString
        ? `${window.location.pathname}?${queryString}`
        : window.location.pathname;

    const method = replace
        ? "replaceState"
        : "pushState";

    window.history[method]({}, "", url);
}

// Navigate To State

function navigateToState(state) {
    updateURL(state);
    renderShop();
}

// Render Categories

function renderCategories() {
    categoriesFilter.innerHTML = categories
        .map(category => {
            return `
        <div class="form-check">
          <input
            class="form-check-input category-checkbox"
            type="checkbox"
            value="${category}"
            id="category-${category}"
          >

          <label
            class="form-check-label"
            for="category-${category}"
          >
            ${formatCategoryName(category)}
          </label>
        </div>
      `;
        })
        .join("");
}

// Sync Filter Controls

function syncFilterControls(state) {
    document
        .querySelectorAll(".category-checkbox")
        .forEach(checkbox => {
            checkbox.checked = state.categories.includes(
                checkbox.value
            );
        });

    minPriceInput.value =
        state.minPrice ?? "";

    maxPriceInput.value =
        state.maxPrice ?? "";

    sortSelect.value = state.sort;
}

// Filter Products

function filterProducts(state) {
    return products.filter(product => {
        const categoryMatch =
            state.categories.length === 0 ||
            state.categories.includes(product.category);

        const priceMatch =
            (state.minPrice === null ||
                product.price.max >= state.minPrice) &&
            (state.maxPrice === null ||
                product.price.min <= state.maxPrice);

        return categoryMatch && priceMatch;
    });
}

// Sort Products

function sortProducts(productList, sort) {
    const sortedProducts = [...productList];

    switch (sort) {
        case "price-asc":
            sortedProducts.sort(
                (a, b) => a.price.min - b.price.min
            );
            break;

        case "price-desc":
            sortedProducts.sort(
                (a, b) => b.price.min - a.price.min
            );
            break;

        case "latest":
            sortedProducts.sort(
                (a, b) => b.id - a.id
            );
            break;

        case "rating":
            sortedProducts.sort(
                (a, b) => b.rating - a.rating
            );
            break;
    }

    return sortedProducts;
}

// Format Price

function formatPrice(price) {
    if (price.min === price.max) {
        return `$${price.min.toFixed(2)}`;
    }

    return `$${price.min.toFixed(2)} – $${price.max.toFixed(2)}`;
}

// Create Product Card

function createProductCard(product) {
    const productColumn = document.createElement("div");

    productColumn.className =
        "col-12 col-sm-6 col-lg-4 col-xl-3 animate__animated animate__fadeInUp";

    const link = document.createElement("a");

    link.href = `product.html?id=${product.id}`;
    link.className = "product-link";

    link.innerHTML = `
    <article class="card product-card">

      <div class="ratio ratio-1x1 product-image-wrapper overflow-hidden">
        <img
          src="${product.src}"
          alt="${product.title}"
          class="product-image"
        >
      </div>

      <div class="card-body d-flex flex-column">

        <span class="product-category">
          ${formatCategoryName(product.category)}
        </span>

        <h2 class="product-title">
          ${product.title}
        </h2>

        <div
          class="d-flex justify-content-between align-items-center mt-auto"
        >
          <span class="product-price">
            ${formatPrice(product.price)}
          </span>

          <span
            class="product-rating"
            aria-label="Rating ${product.rating} out of 5"
          >
            ★ ${product.rating}
          </span>
        </div>

      </div>

    </article>
  `;

    productColumn.appendChild(link);

    return productColumn;
}

// Render Products

function renderProducts(productList, currentPage) {
    productsSection.innerHTML = "";

    const startIndex =
        (currentPage - 1) * PRODUCTS_PER_PAGE;

    const endIndex =
        startIndex + PRODUCTS_PER_PAGE;

    const productsToShow = productList.slice(
        startIndex,
        endIndex
    );

    if (productsToShow.length === 0) {
        productsSection.innerHTML = `
      <div class="col-12">
        <div class="empty-state animate__animated animate__fadeIn">
          <h2>No Products Found</h2>
          <p>
            Try changing your filters or resetting the search.
          </p>
        </div>
      </div>
    `;

        return;
    }

    productsToShow.forEach((product, index) => {
        const productCard =
            createProductCard(product);

        productCard.style.animationDelay =
            `${index * 50}ms`;

        productsSection.appendChild(productCard);
    });
}

// Render Results Count

function renderResultsCount(
    totalProducts,
    currentPage
) {
    if (totalProducts === 0) {
        resultsCount.textContent =
            "No products found";

        return;
    }

    const start =
        (currentPage - 1) * PRODUCTS_PER_PAGE + 1;

    const end = Math.min(
        currentPage * PRODUCTS_PER_PAGE,
        totalProducts
    );

    resultsCount.textContent =
        `Showing ${start}–${end} of ${totalProducts} products`;
}

// Create Pagination Button

function createPaginationButton(
    page,
    currentPage,
    label = page
) {
    const pageItem =
        document.createElement("li");

    pageItem.className =
        `page-item ${page === currentPage
            ? "active"
            : ""
        }`;

    pageItem.innerHTML = `
    <button
      class="page-link"
      type="button"
      data-page="${page}"
      ${page === currentPage
            ? 'aria-current="page"'
            : ""
        }
    >
      ${label}
    </button>
  `;

    return pageItem;
}

// Render Pagination

function renderPagination(
    totalProducts,
    currentPage
) {
    pagination.innerHTML = "";

    const totalPages = Math.ceil(
        totalProducts / PRODUCTS_PER_PAGE
    );

    if (totalPages <= 1) {
        return;
    }

    const previousItem =
        createPaginationButton(
            Math.max(1, currentPage - 1),
            currentPage,
            "Previous"
        );

    if (currentPage === 1) {
        previousItem.classList.add("disabled");

        previousItem.querySelector("button").disabled =
            true;
    }

    pagination.appendChild(previousItem);

    const pages = new Set();

    if (totalPages <= 7) {
        for (let page = 1; page <= totalPages; page++) {
            pages.add(page);
        }
    } else {
        pages.add(1);
        pages.add(2);
        pages.add(totalPages - 1);
        pages.add(totalPages);

        for (
            let page = currentPage - 1;
            page <= currentPage + 1;
            page++
        ) {
            if (page > 0 && page <= totalPages) {
                pages.add(page);
            }
        }
    }

    const sortedPages = [...pages].sort(
        (a, b) => a - b
    );

    let previousPage = null;

    sortedPages.forEach(page => {
        if (
            previousPage !== null &&
            page - previousPage > 1
        ) {
            const dots =
                document.createElement("li");

            dots.className = "page-item";

            dots.innerHTML = `
        <span class="pagination-dots">
          ...
        </span>
      `;

            pagination.appendChild(dots);
        }

        pagination.appendChild(
            createPaginationButton(
                page,
                currentPage
            )
        );

        previousPage = page;
    });

    const nextPage =
        Math.min(
            totalPages,
            currentPage + 1
        );

    const nextItem =
        createPaginationButton(
            nextPage,
            currentPage,
            "Next"
        );

    if (currentPage === totalPages) {
        nextItem.classList.add("disabled");

        nextItem.querySelector("button").disabled =
            true;
    }

    pagination.appendChild(nextItem);
}

// Render Shop

function renderShop() {
    const state = getStateFromURL();

    syncFilterControls(state);

    filterError.classList.add("d-none");
    filterError.textContent = "";

    if (
        state.minPrice !== null &&
        state.maxPrice !== null &&
        state.minPrice > state.maxPrice
    ) {
        productsSection.innerHTML = "";

        filterError.textContent =
            "Minimum price cannot be greater than maximum price.";

        filterError.classList.remove("d-none");

        resultsCount.textContent =
            "Invalid price range";

        pagination.innerHTML = "";

        return;
    }

    const filteredProducts =
        filterProducts(state);

    const sortedProducts =
        sortProducts(
            filteredProducts,
            state.sort
        );

    const totalPages = Math.ceil(
        sortedProducts.length /
        PRODUCTS_PER_PAGE
    );

    let currentPage = state.page;

    if (
        totalPages > 0 &&
        currentPage > totalPages
    ) {
        currentPage = totalPages;

        updateURL(
            {
                ...state,
                page: currentPage,
            },
            true
        );
    }

    if (sortedProducts.length === 0) {
        currentPage = 1;
    }

    renderProducts(
        sortedProducts,
        currentPage
    );

    renderResultsCount(
        sortedProducts.length,
        currentPage
    );

    renderPagination(
        sortedProducts.length,
        currentPage
    );
}

// Filter Form

filterForm.addEventListener(
    "submit",
    event => {
        event.preventDefault();

        const selectedCategories = [
            ...document.querySelectorAll(
                ".category-checkbox:checked"
            ),
        ].map(
            checkbox => checkbox.value
        );

        const minPrice =
            minPriceInput.value === ""
                ? null
                : Number(minPriceInput.value);

        const maxPrice =
            maxPriceInput.value === ""
                ? null
                : Number(maxPriceInput.value);

        if (
            minPrice !== null &&
            maxPrice !== null &&
            minPrice > maxPrice
        ) {
            filterError.textContent =
                "Minimum price cannot be greater than maximum price.";

            filterError.classList.remove("d-none");

            return;
        }

        navigateToState({
            categories: selectedCategories,
            minPrice,
            maxPrice,
            sort: sortSelect.value,
            page: 1,
        });
    }
);

// Sort Products

sortSelect.addEventListener(
    "change",
    () => {
        const state = getStateFromURL();

        navigateToState({
            ...state,
            sort: sortSelect.value,
            page: 1,
        });
    }
);

// Reset Filters

resetFiltersButton.addEventListener(
    "click",
    () => {
        navigateToState({
            categories: [],
            minPrice: null,
            maxPrice: null,
            sort: "default",
            page: 1,
        });
    }
);

// Pagination

pagination.addEventListener(
    "click",
    event => {
        const button =
            event.target.closest("[data-page]");

        if (!button || button.disabled) {
            return;
        }

        const page =
            Number(button.dataset.page);

        if (!page || page < 1) {
            return;
        }

        const state = getStateFromURL();

        navigateToState({
            ...state,
            page,
        });
    }
);

// Browser Navigation

window.addEventListener(
    "popstate",
    renderShop
);

// Initialize

renderCategories();
renderShop();