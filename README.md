# ☕ Coffee Shop

A modern and responsive coffee shop website built with **HTML, CSS, and JavaScript**.

The project focuses on a clean user experience, reusable components, dynamic product rendering, filtering, sorting, pagination, authentication, user preferences, product details, and client-side data persistence.

---

## ✨ Features

- Responsive design for different screen sizes
- Dynamic product rendering using JavaScript
- Product data separated from UI logic
- Category filtering
- Multiple category selection
- Minimum and maximum price filtering
- Price range intersection filtering
- Sorting by:
  - Price
  - Latest
  - Rating

- Ascending and descending sorting order
- Pagination with 12 products per page
- URL-based filters, sorting, and pagination
- Reset filters functionality
- Product cards linked to product details
- Dynamic product variants
- Dynamic product pricing
- Quantity controls
- Add to Cart functionality
- Product reviews
- Review validation
- Related products
- User registration
- User sign in
- Session persistence
- Protected My Account page
- User preferences
- English and Arabic language support
- RTL and LTR layout support
- Dark and light theme support
- Reusable and organized JavaScript modules
- Smooth and subtle animations using Animate.css

---

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)
- Bootstrap 5.3.3
- Animate.css
- Font Awesome
- LocalStorage

---

## 📁 Project Structure

```text
Coffee-Shop-Project/

│
├── css/
│   ├── global.css
│   ├── home.css
│   ├── about.css
│   ├── shop.css
│   ├── product.css
│   ├── sign-in.css
│   ├── sign-up.css
│   ├── account.css
│   └── ...
│
├── data/
│   └── products.data.js
│
├── js/
│   ├── main.js
│   ├── navbar.js
│   ├── auth.js
│   ├── i18n.js
│   ├── theme.js
│   ├── shop.js
│   ├── product.js
│   ├── sign-in.js
│   ├── sign-up.js
│   ├── account.js
│   └── ...
│
├── components/
│   ├── navbar/
│   │   └── navbar.html
│   │
│   └── footer/
│       └── footer.html
│
├── images/
│   ├── logo.png
│   ├── ...
│   └── products/
│       ├── ...
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── ...
│
├── index.html
├── about.html
├── shop.html
├── product.html
├── sign-in.html
├── sign-up.html
├── account.html
└── ...
```

---

## 🧩 Architecture

The project separates data, business logic, UI rendering, reusable components, and styling.

The main product flow is:

```text
products.data.js
       ↓
    shop.js
       ↓
Filter / Sort
       ↓
Pagination
       ↓
     DOM
```

The product details flow is:

```text
products.data.js
       ↓
   product.js
       ↓
Product Selection
       ↓
Variants / Quantity
       ↓
    Add to Cart
```

Shared website components are loaded through `main.js`:

```text
main.js
   ├── Navbar
   ├── Footer
   ├── Theme
   └── Language
```

---

## 📦 Product Data

Product data is stored separately from the UI logic in:

```text
data/products.data.js
```

The data module exports the products as a JavaScript module:

```js
export const products = [
  {
    id: 1,
    title: "House Blend",
    category: "coffee",
    src: "images/house-blend.jpg",
    rating: 4.5,
    description:
      "Discover the rich flavor and carefully crafted character of this smooth and balanced coffee.",

    variants: [
      {
        size: "250g",
        type: "whole-bean",
        price: 19,
      },
    ],

    reviews: [],
  },
];
```

Keeping product data separate makes the project easier to maintain and allows the same product information to be reused across multiple pages.

---

## 🔍 Shop Filtering

The Shop page supports filtering by multiple categories.

Available categories include:

```text
Coffee
Cold Brew
Decaf
Hot Drinks
Tea
Merchandise
```

Multiple categories can be selected at the same time.

The Shop also supports filtering by a minimum and maximum price.

For products with a price range, the project uses **price range intersection filtering**.

For example:

```text
Product:  $19 - $27
Filter:   $20 - $25
```

The product matches because the two ranges overlap.

This allows products with multiple variants and different prices to be filtered correctly.

---

## ↕️ Sorting

Products can be sorted by:

- Price
- Latest
- Rating

Each sorting option supports:

- Ascending
- Descending

The default sorting is:

```text
Latest + Descending
```

The sorting state is synchronized with the URL.

---

## 📄 Pagination

Products are displayed using pagination.

The current configuration is:

```text
12 products per page
```

Pagination automatically updates when:

- Filters change
- Sorting changes
- The sorting order changes
- The user navigates between pages

Pagination also supports browser history navigation.

---

## 🔗 URL State Management

The Shop page stores its current state in the URL.

Example:

```text
shop.html?category=coffee&category=decaf&minPrice=15&maxPrice=30&sort=price&order=asc&page=2
```

The URL can contain:

- Selected categories
- Minimum price
- Maximum price
- Sort option
- Sort order
- Current page

This allows the Shop state to remain available after refreshing the page and when navigating through browser history.

---

## 🛍️ Product Details

Each product has its own product details page.

Example:

```text
product.html?id=18
```

The Product page dynamically loads the requested product from the shared product data.

Current product features include:

- Product image
- Product title
- Product category
- Product rating
- Product description
- Variant selection
- Size selection
- Type selection
- Dynamic price updates
- Quantity controls
- Add to Cart
- Customer reviews
- Related products

---

## 🔄 Product Variants

Products can have multiple variants.

A variant may contain:

```text
Size
Type
Price
```

For example:

```text
Size:
250g
500g
1kg

Type:
Whole Bean
Ground
```

The product price is displayed only when a valid variant combination has been selected.

Unavailable combinations are handled automatically.

---

## 🛒 Cart Integration

Products can be added to the shopping cart from the Product page.

Cart data is currently stored in browser `localStorage`.

A cart item contains information such as:

```text
Product ID
Product Title
Image
Size
Type
Quantity
Unit Price
Total Price
```

Different product variants are treated as separate cart items.

For example:

```text
House Blend
250g
Whole Bean
```

and:

```text
House Blend
500g
Whole Bean
```

are stored as different cart items.

The current cart implementation is designed so the local storage layer can later be replaced with a backend cart system.

---

## ⭐ Product Reviews

The Product page includes a client-side review system.

Current review features include:

- Display existing reviews
- Calculate average rating
- Display review stars
- Add new reviews
- Validate reviewer name
- Validate rating
- Validate review length
- Store submitted reviews in `localStorage`
- Display review dates
- Support multiple reviews per product

The review flow is:

```text
Product Page
      ↓
Write Review
      ↓
Validate Input
      ↓
Save Review
      ↓
Recalculate Rating
      ↓
Render Reviews
```

---

## 🔐 Authentication

The project includes a client-side authentication system using browser `localStorage`.

Current authentication features include:

- User registration
- User sign in
- Session persistence
- Authentication state detection
- Protected My Account page
- Automatic redirection for unauthenticated users
- Navbar authentication state
- Logout functionality

The current authentication system is intended for the frontend stage of the project.

The registration flow is:

```text
Sign Up
   ↓
Validate Input
   ↓
Create User
   ↓
Save User
   ↓
Create Session
   ↓
My Account
```

The login flow is:

```text
Sign In
   ↓
Validate Credentials
   ↓
Create Session
   ↓
My Account
```

The authentication implementation can later be replaced by a backend authentication system.

---

## 👤 My Account

Authenticated users can access the My Account page.

The page currently supports:

- Displaying the user's name
- Displaying the user's email
- Updating the user's name
- Optional profile picture
- Removing the profile picture
- Preferred language
- Preferred theme
- Saving account changes
- Logging out

The account page is protected and requires an authenticated session.

The current structure is designed to allow future expansion into:

```text
/account
/account/orders
/account/orders/:id
/account/settings
```

---

## 🌍 Internationalization

The website supports multiple languages using a centralized internationalization system.

Currently supported languages:

```text
English
Arabic
```

Translation data is maintained in:

```text
js/i18n.js
```

Translations are accessed through reusable translation keys.

Example:

```js
t("shop.categoryNames.coffee", language);
```

The system supports:

- Static text translation
- Dynamically generated JavaScript text
- Form placeholders
- ARIA labels
- Document titles
- Product categories
- Product interface text
- Validation messages
- Authentication messages
- Account page text
- Shop page text
- Product page text
- Footer text

---

## ↔️ RTL / LTR Support

English pages use:

```text
dir="ltr"
```

Arabic pages use:

```text
dir="rtl"
```

The project also keeps specific shared components such as the Navbar and Footer in their intended layout direction so that their visual structure remains consistent when Arabic is selected.

This allows the website content to support RTL while preserving the original component layout.

---

## 🎨 Theme Preferences

Users can select their preferred appearance from My Account.

Available themes:

```text
Dark
Light
```

The selected theme is stored as part of the user's preferences.

The project uses reusable CSS variables for its visual system.

The main design variables are maintained in:

```text
css/global.css
```

This makes it easier to maintain the current design and expand the theme system later.

---

## 💾 Local Storage

The project currently uses browser `localStorage` for client-side persistence.

It is currently used for features such as:

```text
User Accounts
Authentication Session
User Preferences
Shopping Cart
Product Reviews
```

This implementation is intended for the current frontend stage.

In a future full-stack implementation, persistent application data can be migrated to a backend API and database.

---

## 🧱 Reusable Components

Common website elements are loaded dynamically instead of being duplicated across every page.

Current reusable components include:

```text
Navbar
Footer
```

They are stored in:

```text
components/
```

and loaded through `main.js`.

Example:

```js
fetch("components/navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });
```

This allows shared components to be maintained from a central location.

---

## 🧠 JavaScript Modules

The project uses JavaScript ES Modules to separate responsibilities.

Examples include:

```text
main.js
    Shared initialization

navbar.js
    Navbar authentication state

auth.js
    Authentication and session management

i18n.js
    Language and translation management

theme.js
    Theme management

shop.js
    Product listing, filtering, sorting, and pagination

product.js
    Product details, variants, cart integration, reviews, and related products

sign-in.js
    Sign in form and validation

sign-up.js
    Registration form and validation

account.js
    Account information and preferences
```

This structure keeps individual files focused and makes future development easier.

---

## 🎨 Design

The project uses a dark coffee-inspired visual identity.

The color system is managed through reusable CSS variables.

Main colors are defined in:

```text
css/global.css
```

The design uses:

- Dark backgrounds
- Coffee-inspired gold accents
- Neutral text colors
- Subtle borders
- Soft shadows
- Responsive spacing
- Minimal hover effects
- Subtle animations

Bootstrap is mainly used for layout and responsive utilities, while custom CSS is used when greater control over the visual identity is required.

---

## 📱 Responsive Design

The website is designed to work across different screen sizes.

Bootstrap is mainly used for:

- Grid layouts
- Responsive columns
- Spacing utilities
- Responsive navigation
- Form layouts
- Flexbox utilities

Custom media queries are used where additional control is required.

The project aims to maintain consistent usability across:

```text
Desktop
Laptop
Tablet
Mobile
```

---

## ✨ Animations

The project uses **Animate.css** for smooth and subtle entrance animations.

Examples include:

```text
fadeIn
fadeInUp
fadeInLeft
fadeInRight
```

Directional animations are adjusted where necessary to provide a more natural experience in both LTR and RTL layouts.

---

## ⚙️ Development Approach

The project follows a separation-of-concerns approach.

The main goal is to keep:

```text
Data
Logic
UI
Styling
Components
```

separated from one another.

For example:

```text
Product Data
     ↓
Business Logic
     ↓
UI Rendering
     ↓
Styling
```

This makes the code easier to understand, maintain, debug, and extend.

---

## 🧪 Validation and Error Handling

User input is validated before being processed.

Current validation includes:

- Required fields
- Email format validation
- Password length validation
- Password confirmation
- Review validation
- Price validation
- Quantity validation
- Image validation
- Authentication credential validation

The project also handles invalid or missing local storage data using safe parsing and fallback values.

---

## 🚀 Running the Project

Because the project uses ES Modules and dynamically loaded components, it should be run through a local development server.

### Using VS Code Live Server

1. Open the project in VS Code.
2. Install the Live Server extension if needed.
3. Open the project folder.
4. Right-click the desired HTML page.
5. Select **Open with Live Server**.

Example:

```text
shop.html
```

or:

```text
index.html
```

---

## 📌 Current Status

This project is currently under development.

The current frontend implementation includes:

- Responsive layout
- Reusable Navbar and Footer components
- Dynamic product data
- Product filtering
- Multiple category filtering
- Price range filtering
- Sorting
- Pagination
- URL state management
- Product details
- Product variants
- Quantity controls
- Add to Cart integration
- Product reviews
- Related products
- User authentication
- My Account
- User preferences
- English and Arabic localization
- RTL and LTR support
- Dark and light themes
- LocalStorage persistence
- Responsive design
- Animations

The project can continue evolving into a full-stack coffee shop application.

---

## 🗺️ Development Roadmap

The project can evolve through the following stages:

```text
Frontend Foundation
       ↓
Reusable Components
       ↓
Dynamic Product Data
       ↓
Filtering / Sorting / Pagination
       ↓
Product Details
       ↓
Authentication
       ↓
My Account
       ↓
Internationalization
       ↓
Cart
       ↓
Checkout
       ↓
Orders
       ↓
Backend API
       ↓
Database
       ↓
Payment Integration
       ↓
Production Deployment
```

---

## 🚧 Future Improvements

Possible future improvements include:

- Complete Cart page
- Checkout page
- Order creation
- Order history
- Order details
- User addresses
- Backend authentication
- REST API integration
- Database integration
- Persistent server-side cart
- Persistent server-side reviews
- Email verification
- Password reset
- Inventory management
- Product management
- Search functionality
- Advanced filtering
- Payment integration
- Admin dashboard
- Production deployment

---

## 🧩 Future Backend Architecture

The current frontend structure is intended to make future backend integration easier.

A possible future architecture is:

```text
Frontend
    ↓
REST API
    ↓
Node.js / Express
    ↓
PostgreSQL
```

Authentication can later move from client-side storage to secure server-side authentication.

Product, cart, order, review, payment, and user data can eventually be managed by the backend.

---

## 👥 Team Project

This project is developed as a frontend team project with the goal of building a structured, responsive, and maintainable coffee shop website.

The project emphasizes:

- Team collaboration
- Clean code
- Reusable components
- Separation of concerns
- Problem solving
- Research when needed
- Attention to detail
- Continuous improvement

The project is also designed to provide a strong foundation for future backend development.

---

## 📚 Learning Goals

The project is also used as a practical learning environment for:

- HTML5
- CSS3
- JavaScript
- ES Modules
- DOM manipulation
- LocalStorage
- Responsive design
- Bootstrap
- Component organization
- Form validation
- Authentication concepts
- State management
- Internationalization
- RTL / LTR layouts
- Client-side application architecture

---

## 📄 License

This project is created for educational and development purposes.
