import { homeProducts as products } from "../data/products.data.js";

document.addEventListener("DOMContentLoaded", function () {
    const train =
        document.getElementById("productTrain");

    const wrapper =
        document.getElementById("trainWrapper");

    if (!train || !wrapper) {
        return;
    }

    function getPriceRange(variants) {
        const prices =
            variants.map((variant) => variant.price);

        const minPrice =
            Math.min(...prices);

        const maxPrice =
            Math.max(...prices);

        return `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
    }

    function createProductCard(product) {
        const card =
            document.createElement("div");

        card.className =
            "product-card-item";

        card.innerHTML = `
            <div class="product-image-container">
                <img
                    src="${product.src}"
                    alt="${product.title}"
                    class="product-image"
                />
            </div>

            <h5 class="product-title">
                ${product.title}
            </h5>

            <p class="product-price">
                ${getPriceRange(product.variants)}
            </p>
        `;

        return card;
    }

    products.forEach((product) => {
        train.appendChild(
            createProductCard(product)
        );
    });

    train.innerHTML += train.innerHTML;

    let isHovered = false;
    let animationId;

    const scrollSpeed = 0.5;

    function startTrain() {
        if (!isHovered) {
            wrapper.scrollLeft += scrollSpeed;

            if (
                wrapper.scrollLeft >=
                train.scrollWidth / 2
            ) {
                wrapper.scrollLeft = 0;
            }
        }

        animationId =
            requestAnimationFrame(startTrain);
    }

    startTrain();

    const cards =
        train.querySelectorAll(
            ".product-card-item"
        );

    cards.forEach((card) => {
        card.addEventListener(
            "mouseenter",
            function () {
                isHovered = true;
            }
        );

        card.addEventListener(
            "mouseleave",
            function () {
                isHovered = false;
            }
        );
    });
});