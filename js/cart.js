// Cart Page

const CART_STORAGE_KEY =
    "coffee-shop-cart";

const cartItemsContainer =
    document.querySelector(
        "#cartItems"
    );

const cartSubtotalElement =
    document.querySelector(
        "#cartSubtotal"
    );

const cartTotalElement =
    document.querySelector(
        "#cartTotal"
    );


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


// Format Price

function formatPrice(price) {
    return `$${Number(price).toFixed(2)}`;
}


// Calculate Cart Total

function calculateCartTotal(cart) {
    return cart.reduce(
        (total, item) =>
            total +
            Number(item.unitPrice) *
            Number(item.quantity),
        0
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


// Remove Cart Item

function removeCartItem(
    productId,
    size,
    type
) {
    const cart =
        getCart();

    const updatedCart =
        cart.filter(
            item =>
                !(
                    item.productId ===
                    productId &&
                    item.size ===
                    size &&
                    item.type ===
                    type
                )
        );

    saveCart(
        updatedCart
    );

    renderCart();
}


// Update Cart Quantity

function updateCartQuantity(
    productId,
    size,
    type,
    quantity
) {
    const cart =
        getCart();

    const item =
        cart.find(
            cartItem =>
                cartItem.productId ===
                productId &&
                cartItem.size ===
                size &&
                cartItem.type ===
                type
        );

    if (!item) {
        return;
    }

    const newQuantity =
        Number(quantity);

    if (
        !Number.isInteger(
            newQuantity
        ) ||
        newQuantity < 1
    ) {
        renderCart();
        return;
    }

    item.quantity =
        newQuantity;

    item.totalPrice =
        item.unitPrice *
        item.quantity;

    saveCart(cart);

    renderCart();
}


// Create Cart Row

function createCartRow(
    item
) {
    const row =
        document.createElement(
            "tr"
        );

    row.innerHTML = `
        <td>
            <button
                type="button"
                class="btn-remove"
                data-remove-product="${item.productId}"
                data-remove-size="${escapeHTML(
        item.size ?? ""
    )}"
                data-remove-type="${escapeHTML(
        item.type ?? ""
    )}"
                aria-label="Remove ${escapeHTML(
        item.title
    )}"
            >
                &times;
            </button>
        </td>

        <td>
            <div class="cart-product-info">

                <img
                    src="${escapeHTML(
        item.image
    )}"
                    alt="${escapeHTML(
        item.title
    )}"
                    class="cart-product-thumb"
                >

                <div>
                    <div class="cart-product-name">
                        ${escapeHTML(
        item.title
    )}
                    </div>

                    ${item.size ||
            item.type
            ? `
                                <div class="cart-product-variant">
                                    ${item.size
                ? escapeHTML(
                    item.size
                )
                : ""
            }

                                    ${item.size &&
                item.type
                ? " · "
                : ""
            }

                                    ${item.type
                ? escapeHTML(
                    item.type
                )
                : ""
            }
                                </div>
                            `
            : ""
        }

                </div>

            </div>
        </td>

        <td class="cart-price">
            ${formatPrice(
            item.unitPrice
        )}
        </td>

        <td>
            <input
                type="number"
                class="form-control cart-qty-input"
                value="${item.quantity}"
                min="1"
                max="99"
                step="1"
                data-quantity-product="${item.productId}"
                data-quantity-size="${escapeHTML(
            item.size ?? ""
        )}"
                data-quantity-type="${escapeHTML(
            item.type ?? ""
        )}"
                aria-label="Quantity"
            >
        </td>

        <td class="cart-subtotal">
            ${formatPrice(
            item.unitPrice *
            item.quantity
        )}
        </td>
    `;

    return row;
}


// Render Empty Cart

function renderEmptyCart() {
    cartItemsContainer.innerHTML = `
        <tr>
            <td
                colspan="5"
                class="text-center py-5"
            >
                <div class="cart-empty-state">
                    <p
                        class="cart-empty-text"
                        data-i18n="cart.emptyCart"
                    >
                        Your cart is empty.
                    </p>

                    <a
                        href="shop.html"
                        class="checkout-btn"
                        data-i18n="cart.continueShopping"
                    >
                        Continue Shopping
                    </a>
                </div>
            </td>
        </tr>
    `;
}


// Render Cart

function renderCart() {
    if (
        !cartItemsContainer
    ) {
        return;
    }

    const cart =
        getCart();

    if (
        cart.length === 0
    ) {
        renderEmptyCart();

        updateCartTotals(
            []
        );

        return;
    }

    cartItemsContainer.innerHTML =
        "";

    cart.forEach(
        item => {
            cartItemsContainer.appendChild(
                createCartRow(
                    item
                )
            );
        }
    );

    updateCartTotals(
        cart
    );
}


// Update Cart Totals

function updateCartTotals(
    cart
) {
    const subtotal =
        calculateCartTotal(
            cart
        );

    if (
        cartSubtotalElement
    ) {
        cartSubtotalElement.textContent =
            formatPrice(
                subtotal
            );
    }

    if (
        cartTotalElement
    ) {
        cartTotalElement.textContent =
            formatPrice(
                subtotal
            );
    }
}


// Cart Events

function addCartEvents() {
    cartItemsContainer.addEventListener(
        "click",
        event => {
            const removeButton =
                event.target.closest(
                    "[data-remove-product]"
                );

            if (
                !removeButton
            ) {
                return;
            }

            const productId =
                Number(
                    removeButton.dataset
                        .removeProduct
                );

            const size =
                removeButton.dataset
                    .removeSize ||
                null;

            const type =
                removeButton.dataset
                    .removeType ||
                null;

            removeCartItem(
                productId,
                size,
                type
            );
        }
    );

    cartItemsContainer.addEventListener(
        "change",
        event => {
            const quantityInput =
                event.target.closest(
                    "[data-quantity-product]"
                );

            if (
                !quantityInput
            ) {
                return;
            }

            const productId =
                Number(
                    quantityInput.dataset
                        .quantityProduct
                );

            const size =
                quantityInput.dataset
                    .quantitySize ||
                null;

            const type =
                quantityInput.dataset
                    .quantityType ||
                null;

            updateCartQuantity(
                productId,
                size,
                type,
                quantityInput.value
            );
        }
    );
}


// Listen For Cart Changes From Another Tab

window.addEventListener(
    "storage",
    event => {
        if (
            event.key ===
            CART_STORAGE_KEY
        ) {
            renderCart();
        }
    }
);


// Initialize

addCartEvents();

renderCart();