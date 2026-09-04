# ☕ Coffee Shop

A modern and responsive coffee shop website built with **HTML, CSS, and JavaScript**.
The project focuses on a clean user experience, reusable components, dynamic product rendering, filtering, sorting, and pagination.

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
- Smooth and subtle animations using Animate.css
- Dark coffee-inspired theme
- Reusable and organized JavaScript modules

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)
- Bootstrap 5.3.3
- Animate.css

## 📁 Project Structure

```text
Coffee-Shop-Project/
│
├── css/
│   ├── global.css
│   └── shop.css
│
├── data/
│   └── products.data.js
│
├── js/
│   └── shop.js
│
├── images/
│   └── ...
│
├── index.html
├── shop.html
└── ...
```

## 🧩 Architecture

The project separates data, logic, and styling:

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

Product data is stored separately and exported as a JavaScript module:

```js
export const products = [
  {
    id: 1,
    title: "House Blend",
    category: "coffee",
    src: "images/coffee.jpg",
    price: {
      min: 19,
      max: 27,
    },
    rating: 4.5,
  },
];
```

## 🔍 Shop Filtering

The Shop supports filtering by multiple categories:

```text
Coffee
Cold Brew
Decaf
Merchandise
```

It also supports filtering by a price range.

For products with a price range, a product is displayed when its price range overlaps with the selected filter range.

For example:

```text
Product:  $19 - $27
Filter:   $20 - $25
```

The product matches because the two ranges overlap.

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

## 📄 Pagination

Products are displayed using pagination with:

```text
12 products per page
```

Pagination automatically updates when filters or sorting options change.

## 🔗 URL Parameters

The current Shop state is stored in the URL.

Example:

```text
shop.html?category=coffee&category=decaf&minPrice=15&maxPrice=30&sort=price&order=asc&page=2
```

This allows the current filters, sorting, and page to remain available after refreshing the page or navigating through browser history.

## 🎨 Design

The project uses a dark coffee-inspired color palette with reusable CSS variables.

The main colors are managed in:

```text
css/global.css
```

Page-specific styles are managed in:

```text
css/shop.css
```

Bootstrap is mainly used for layout and responsive utilities, while the project's visual identity is controlled through custom CSS variables.

## 🚀 Running the Project

Because the project uses ES Modules, run it through a local development server.

For example, using **VS Code Live Server**:

1. Open the project in VS Code.
2. Install the Live Server extension if needed.
3. Right-click `shop.html`.
4. Select **Open with Live Server**.

## 📌 Current Status

This project is currently under development.

The Shop page currently includes:

- Dynamic products
- Filtering
- Sorting
- Pagination
- URL state management
- Responsive layout
- Dark theme
- Product cards

More pages and features can be added as the project evolves.

## 👥 Team Project

This project is developed as a frontend team project with the goal of building a structured, responsive, and maintainable coffee shop website.

## 📄 License

This project is created for educational and development purposes.
