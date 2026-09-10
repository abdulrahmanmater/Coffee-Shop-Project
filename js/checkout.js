

import {
    t,
    normalizeLanguage
} from "./i18n.js";
const CART_STORAGE_KEY =
    "coffee-shop-cart";
const COUPON_STORAGE_KEY = "coffee-shop-coupon";

const SHIPPING_COST = 5;
const checkoutForm =
    document.getElementById(
        "checkoutForm"
    );

const firstNameInput =
    document.getElementById(
        "firstName"
    );

const lastNameInput =
    document.getElementById(
        "lastName"
    );

const companyInput =
    document.getElementById(
        "company"
    );

const countryInput =
    document.getElementById(
        "country"
    );

const streetAddressInput =
    document.getElementById(
        "streetAddress"
    );

const apartmentInput =
    document.getElementById(
        "apartment"
    );

const cityInput =
    document.getElementById(
        "city"
    );

const stateInput =
    document.getElementById(
        "state"
    );

const zipCodeInput =
    document.getElementById(
        "zipCode"
    );

const phoneInput =
    document.getElementById(
        "checkoutPhone"
    );

const emailInput =
    document.getElementById(
        "checkoutEmail"
    );

const orderNotesInput =
    document.getElementById(
        "orderNotes"
    );

const checkoutItemsContainer =
    document.getElementById(
        "checkoutItems"
    );

const checkoutSubtotalElement =
    document.getElementById(
        "checkoutSubtotal"
    );

const checkoutShippingElement =
    document.getElementById(
        "checkoutShipping"
    );

const checkoutTotalElement =
    document.getElementById(
        "checkoutTotal"
    );

const placeOrderButton =
    document.querySelector(
        ".checkout-submit-btn"
    );
if (
    !checkoutForm ||
    !firstNameInput ||
    !lastNameInput ||
    !companyInput ||
    !countryInput ||
    !streetAddressInput ||
    !apartmentInput ||
    !cityInput ||
    !stateInput ||
    !zipCodeInput ||
    !phoneInput ||
    !emailInput ||
    !orderNotesInput ||
    !checkoutItemsContainer ||
    !checkoutSubtotalElement ||
    !checkoutShippingElement ||
    !checkoutTotalElement ||
    !placeOrderButton
) {
    throw new Error(
        "Checkout page elements could not be found."
    );
}

function getCurrentLanguage() {
    return normalizeLanguage(
        document.documentElement.lang
    );
}

function getMessage(key) {
    return t(
        `validation.${key}`,
        getCurrentLanguage()
    );
}

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
        if (
            !Array.isArray(
                cart
            )
        ) {
            return [];
        }
        return cart.filter(
            item =>
                item &&
                typeof item ===
                "object" &&
                Number.isInteger(
                    Number(
                        item.productId
                    )
                ) &&
                typeof item.title ===
                "string" &&
                typeof item.image ===
                "string" &&
                Number.isInteger(
                    Number(
                        item.quantity
                    )
                ) &&
                Number(
                    item.quantity
                ) >= 1 &&
                Number.isFinite(
                    Number(
                        item.unitPrice
                    )
                ) &&
                Number(
                    item.unitPrice
                ) >= 0
        );
    } catch {
        return [];
    }
}

function formatPrice(
    price
) {
    return `$${Number(
        price
    ).toFixed(2)}`;
}

function calculateSubtotal(
    cart
) {
    return cart.reduce(
        (
            total,
            item
        ) =>
            total +
            Number(
                item.unitPrice
            ) *
            Number(
                item.quantity
            ),
        0
    );
}

function calculateTotal(
    subtotal
) {
    return subtotal +
        SHIPPING_COST;
}

function escapeHTML(
    value
) {
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

function renderEmptyOrder() {
    checkoutItemsContainer.innerHTML =
        `
            <div class="checkout-empty-order">
                <p
                    class="checkout-empty-order-text"
                    data-i18n="checkout.emptyOrder"
                >
                    Your cart is empty.
                </p>
                               <a
                    href="shop.html"
                    class="checkout-empty-order-link"
                    data-i18n="checkout.continueShopping"
                >
                    Continue Shopping
                </a>
            </div>
        `;
    checkoutSubtotalElement.textContent =
        formatPrice(0);
    checkoutShippingElement.textContent =
        formatPrice(0);
    checkoutTotalElement.textContent =
        formatPrice(0);
    placeOrderButton.disabled =
        true;
}

function createCheckoutItem(
    item
) {
    const itemElement =
        document.createElement(
            "div"
        );
    itemElement.className =
        "checkout-summary-item";
    const details =
        document.createElement(
            "div"
        );
    details.className =
        "checkout-summary-details";
    const title =
        document.createElement(
            "span"
        );
    title.className =
        "checkout-summary-title";
    title.textContent =
        item.title;
    const variantText =
        [
            item.size,
            item.type
        ]
            .filter(
                value =>
                    value !== null &&
                    value !== undefined &&
                    value !== ""
            )
            .join(" · ");
    if (variantText) {
        const variant =
            document.createElement(
                "span"
            );
        variant.className =
            "checkout-summary-variant";
        variant.textContent =
            variantText;
        details.appendChild(
            variant
        );
    }
    const quantity =
        document.createElement(
            "span"
        );
    quantity.className =
        "checkout-summary-quantity";
    quantity.textContent =
        `×${Number(
            item.quantity
        )}`;
    title.appendChild(
        quantity
    );
    details.insertBefore(
        title,
        details.firstChild
    );
    const price =
        document.createElement(
            "span"
        );
    price.className =
        "checkout-summary-item-price";
    price.textContent =
        formatPrice(
            Number(
                item.unitPrice
            ) *
            Number(
                item.quantity
            )
        );
    itemElement.appendChild(
        details
    );
    itemElement.appendChild(
        price
    );
    return itemElement;
}

function renderOrder() {
    const cart =
        getCart();
    if (
        cart.length === 0
    ) {
        renderEmptyOrder();
        return;
    }
    checkoutItemsContainer.innerHTML =
        "";
    cart.forEach(
        item => {
            checkoutItemsContainer.appendChild(
                createCheckoutItem(
                    item
                )
            );
        }
    );
    const subtotal =
        calculateSubtotal(
            cart
        );

    let discount = 0;
    const appliedCoupon = localStorage.getItem(COUPON_STORAGE_KEY);
    if (appliedCoupon === "sale20" && subtotal > 0) {
        discount = subtotal * 0.20;
    }

    const total = subtotal - discount + SHIPPING_COST;

    checkoutSubtotalElement.textContent =
        formatPrice(
            subtotal
        );

    const checkoutDiscountRow = document.getElementById("checkoutDiscountRow");
    const checkoutDiscount = document.getElementById("checkoutDiscount");
    if (checkoutDiscountRow && checkoutDiscount) {
        if (discount > 0) {
            checkoutDiscountRow.style.display = "flex";
            checkoutDiscount.textContent = "-" + formatPrice(discount);
        } else {
            checkoutDiscountRow.style.display = "none";
        }
    }

    checkoutShippingElement.textContent =
        formatPrice(
            SHIPPING_COST
        );
    checkoutTotalElement.textContent =
        formatPrice(
            total
        );
    placeOrderButton.disabled =
        false;
}

function showError(
    input,
    message
) {
    clearError(input);
    input.classList.add(
        "is-invalid"
    );
    const error =
        document.createElement(
            "div"
        );
    error.className =
        "validation-error";
    error.textContent =
        message;
    input.insertAdjacentElement(
        "afterend",
        error
    );
}

function clearError(
    input
) {
    input.classList.remove(
        "is-invalid"
    );
    const existingError =
        input.nextElementSibling;
    if (
        existingError &&
        existingError.classList.contains(
            "validation-error"
        )
    ) {
        existingError.remove();
    }
}

function validateName(
    input
) {
    const value =
        input.value.trim();
    if (!value) {
        showError(
            input,
            getMessage(
                "nameRequired"
            )
        );
        return false;
    }
    if (value.length < 2) {
        showError(
            input,
            getMessage(
                "nameTooShort"
            )
        );
        return false;
    }
    if (value.length > 50) {
        showError(
            input,
            getMessage(
                "nameTooLong"
            )
        );
        return false;
    }
    if (
        !/^[\p{L}\s'-]+$/u.test(
            value
        )
    ) {
        showError(
            input,
            getMessage(
                "invalidName"
            )
        );
        return false;
    }
    clearError(input);
    return true;
}

function validateCompany() {
    const value =
        companyInput.value.trim();
    if (!value) {
        clearError(
            companyInput
        );
        return true;
    }
    if (value.length > 100) {
        showError(
            companyInput,
            getMessage(
                "companyTooLong"
            )
        );
        return false;
    }
    clearError(
        companyInput
    );
    return true;
}

function validateRequiredText(
    input,
    requiredMessage,
    maxLengthMessage,
    maxLength
) {
    const value =
        input.value.trim();
    if (!value) {
        showError(
            input,
            getMessage(
                requiredMessage
            )
        );
        return false;
    }
    if (
        value.length >
        maxLength
    ) {
        showError(
            input,
            getMessage(
                maxLengthMessage
            )
        );
        return false;
    }
    clearError(input);
    return true;
}

function validateCountry() {
    if (
        !countryInput.value
    ) {
        showError(
            countryInput,
            getMessage(
                "countryRequired"
            )
        );
        return false;
    }
    clearError(
        countryInput
    );
    return true;
}

function validateState() {
    if (
        !stateInput.value
    ) {
        showError(
            stateInput,
            getMessage(
                "stateRequired"
            )
        );
        return false;
    }
    clearError(
        stateInput
    );
    return true;
}

function validateZipCode() {
    const value =
        zipCodeInput.value.trim();
    if (!value) {
        showError(
            zipCodeInput,
            getMessage(
                "zipCodeRequired"
            )
        );
        return false;
    }
    if (
        value.length < 3 ||
        value.length > 10
    ) {
        showError(
            zipCodeInput,
            getMessage(
                "invalidZipCode"
            )
        );
        return false;
    }
    if (
        !/^[A-Za-z0-9\s-]+$/.test(
            value
        )
    ) {
        showError(
            zipCodeInput,
            getMessage(
                "invalidZipCode"
            )
        );
        return false;
    }
    clearError(
        zipCodeInput
    );
    return true;
}

function validatePhone() {
    const value =
        phoneInput.value.trim();
    if (!value) {
        showError(
            phoneInput,
            getMessage(
                "phoneRequired"
            )
        );
        return false;
    }
    const normalizedValue =
        value.replace(
            /[\s-]/g,
            ""
        );
    const egyptianPhonePattern =
        /^(?:01[0125]\d{8}|\+201[0125]\d{8})$/;
    if (
        !egyptianPhonePattern.test(
            normalizedValue
        )
    ) {
        showError(
            phoneInput,
            getMessage(
                "invalidEgyptianPhone"
            )
        );
        return false;
    }
    clearError(
        phoneInput
    );
    return true;
}

function validateEmail() {
    const value =
        emailInput.value.trim();
    if (!value) {
        showError(
            emailInput,
            getMessage(
                "emailRequired"
            )
        );
        return false;
    }
    if (value.length > 100) {
        showError(
            emailInput,
            getMessage(
                "emailTooLong"
            )
        );
        return false;
    }
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
        !emailPattern.test(
            value
        )
    ) {
        showError(
            emailInput,
            getMessage(
                "invalidEmail"
            )
        );
        return false;
    }
    clearError(
        emailInput
    );
    return true;
}

function validateApartment() {
    const value =
        apartmentInput.value.trim();
    if (!value) {
        clearError(
            apartmentInput
        );
        return true;
    }
    if (value.length > 100) {
        showError(
            apartmentInput,
            getMessage(
                "apartmentTooLong"
            )
        );
        return false;
    }
    clearError(
        apartmentInput
    );
    return true;
}

function validateOrderNotes() {
    const value =
        orderNotesInput.value.trim();
    if (!value) {
        clearError(
            orderNotesInput
        );
        return true;
    }
    if (value.length > 500) {
        showError(
            orderNotesInput,
            getMessage(
                "orderNotesTooLong"
            )
        );
        return false;
    }
    clearError(
        orderNotesInput
    );
    return true;
}

function validateCheckoutForm() {
    return (
        validateName(
            firstNameInput
        ) &&
        validateName(
            lastNameInput
        ) &&
        validateCompany() &&
        validateCountry() &&
        validateRequiredText(
            streetAddressInput,
            "streetAddressRequired",
            "streetAddressTooLong",
            200
        ) &&
        validateApartment() &&
        validateRequiredText(
            cityInput,
            "cityRequired",
            "cityTooLong",
            100
        ) &&
        validateState() &&
        validateZipCode() &&
        validatePhone() &&
        validateEmail() &&
        validateOrderNotes()
    );
}

function normalizeFormValues() {
    firstNameInput.value =
        firstNameInput.value.trim();
    lastNameInput.value =
        lastNameInput.value.trim();
    companyInput.value =
        companyInput.value.trim();
    streetAddressInput.value =
        streetAddressInput.value.trim();
    apartmentInput.value =
        apartmentInput.value.trim();
    cityInput.value =
        cityInput.value.trim();
    zipCodeInput.value =
        zipCodeInput.value.trim();
    phoneInput.value =
        phoneInput.value.trim();
    emailInput.value =
        emailInput.value.trim();
    orderNotesInput.value =
        orderNotesInput.value.trim();
}

firstNameInput.addEventListener(
    "input",
    () =>
        validateName(
            firstNameInput
        )
);

lastNameInput.addEventListener(
    "input",
    () =>
        validateName(
            lastNameInput
        )
);

companyInput.addEventListener(
    "input",
    validateCompany
);

countryInput.addEventListener(
    "change",
    validateCountry
);

streetAddressInput.addEventListener(
    "input",
    () =>
        validateRequiredText(
            streetAddressInput,
            "streetAddressRequired",
            "streetAddressTooLong",
            200
        )
);

apartmentInput.addEventListener(
    "input",
    validateApartment
);

cityInput.addEventListener(
    "input",
    () =>
        validateRequiredText(
            cityInput,
            "cityRequired",
            "cityTooLong",
            100
        )
);

stateInput.addEventListener(
    "change",
    validateState
);

zipCodeInput.addEventListener(
    "input",
    validateZipCode
);

phoneInput.addEventListener(
    "input",
    validatePhone
);

emailInput.addEventListener(
    "input",
    validateEmail
);

orderNotesInput.addEventListener(
    "input",
    validateOrderNotes
);

checkoutForm.addEventListener(
    "submit",
    event => {
        event.preventDefault();

        const cart =
            getCart();

        if (
            cart.length === 0
        ) {
            renderEmptyOrder();
            return;
        }

        const isFormValid =
            validateCheckoutForm();

        if (!isFormValid) {
            const firstInvalidField =
                checkoutForm.querySelector(
                    ".is-invalid"
                );

            if (firstInvalidField) {
                firstInvalidField.focus();
            }

            return;
        }

        normalizeFormValues();

        const selectedPayment =
            document.querySelector(
                'input[name="payment"]:checked'
            )?.value;

        const language =
            getCurrentLanguage();

        // Clear cart after successful order submission
        localStorage.removeItem(
            CART_STORAGE_KEY
        );

        Swal.fire({
            icon: "success",

            title: t(
                "checkout.orderPlacedTitle",
                language
            ),

            text: t(
                "checkout.orderPlacedMessage",
                language
            ),

            confirmButtonText: t(
                "checkout.continue",
                language
            ),

            confirmButtonColor:
                "#c69a3a"
        }).then(() => {
            renderOrder();
        });

        console.log(
            "Order data:",
            {
                payment:
                    selectedPayment,

                cart,

                customer: {
                    firstName:
                        firstNameInput.value,

                    lastName:
                        lastNameInput.value,

                    company:
                        companyInput.value,

                    country:
                        countryInput.value,

                    streetAddress:
                        streetAddressInput.value,

                    apartment:
                        apartmentInput.value,

                    city:
                        cityInput.value,

                    state:
                        stateInput.value,

                    zipCode:
                        zipCodeInput.value,

                    phone:
                        phoneInput.value,

                    email:
                        emailInput.value,

                    orderNotes:
                        orderNotesInput.value
                }
            }
        );
    }
);

window.addEventListener(
    "storage",
    event => {
        if (
            event.key ===
            CART_STORAGE_KEY
        ) {
            renderOrder();
        }
    }
);

renderOrder();