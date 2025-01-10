# Forever - E-commerce Website

Welcome to **Forever**, a modern and dynamic e-commerce platform built using **React.js** and **Tailwind CSS**. This website is designed to provide users with a seamless shopping experience, featuring multiple pages and reusable components.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Pages](#pages)
- [Components](#components)
- [Hooks Used](#hooks-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Responsive design with Tailwind CSS
- User authentication (Login Page)
- Dynamic cart management
- Product listings and categories (Collections Page)
- Order management system
- Reusable components for UI consistency
- State management using React hooks

---

## Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useContext, useEffect)

---

## Pages

### 1. Home
   - Welcomes users to the platform and highlights featured products or collections.

### 2. Cart
   - Displays items added by the user with the ability to update or remove them.

### 3. Login
   - User authentication page for logging in or signing up.

### 4. Collections
   - Displays a categorized list of products.

### 5. About
   - Provides details about the Forever platform and its mission.

### 6. Contact
   - Includes a form for users to reach out to the Forever team.

### 7. Orders
   - Displays a summary of the user's past orders.

### 8. Place Orders
   - Checkout page for confirming and placing orders.

### 9. Products
   - Details page for individual products, showcasing their description, price, and reviews.

---

## Components

### 1. BestSeller.jsx
   - Displays the best-selling products.

### 2. CartTotal.jsx
   - Calculates and displays the total cost of items in the cart.

### 3. Footer.jsx
   - Bottom section with links and branding information.

### 4. Hero.jsx
   - Main banner section for the homepage.

### 5. LatestCollection.jsx
   - Highlights the latest collection of products.

### 6. Navber.jsx
   - Top navigation bar with links to different pages.

### 7. NesletterBox.jsx
   - Subscription box for newsletters.

### 8. OurPolicy.jsx
   - Displays the company's policies.

### 9. ProductItems.jsx
   - Component to list individual product items.

### 10. RelatedProducts.jsx
   - Displays products related to the currently viewed product.

### 11. SearchBar.jsx
   - Search bar component for finding products.

### 12. Title.jsx
   - Component for displaying page titles dynamically.

---

## Hooks Used

1. **useState**: For managing component-level states like cart items, login form data, etc.
2. **useEffect**: For handling side effects such as fetching data from APIs.
3. **useContext**: For managing global states like user authentication and theme preferences.

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js installed (version 16.x or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rajashekar-egurla/ecommerce-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd forever-ecommerce
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Folder Structure

```
forever-ecommerce/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── productsData.js
│   ├── components/
│   │   ├── BestSeller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navber.jsx
│   │   ├── NesletterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── ProductItems.jsx
│   │   ├── RelatedProducts.jsx
│   │   ├── SearchBar.jsx
│   │   └── Title.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── PlaceOrders.jsx
│   │   └── Product.jsx
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── tailwind.css
├── package.json
└── README.md
```

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Happy Coding! 🎉
