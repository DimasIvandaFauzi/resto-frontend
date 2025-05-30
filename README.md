# Resto Lebron - Frontend

This is the frontend for **Resto Lebron**, a restaurant management application. It allows users to browse the menu, place orders, manage menu items (for administrators), and simulate a payment process. The application is built using React, Vite, and Tailwind CSS.

## Features

* **Menu Display**:
    * Browse menu items categorized into "Makanan" (Food), "Minuman" (Drinks), and "Desert" (Desserts).
    * View item details including name, price, and image.
    * Filter menu items by category.
* **Order Management (Pesanan)**:
    * Add items to an order list (sidebar).
    * Adjust the quantity of items in the order.
    * View the total price of the current order.
    * Initiate a payment process for the order.
* **Menu Item Management (Admin)**:
    * Add new menu items with details like name, description, price, stock, and category.
    * Update existing menu items (stock, description, category, name).
    * Delete menu items.
* **Payment Simulation**:
    * Modal for selecting payment type (Cash or Debit).
    * For cash payments, input amount and see calculated change.
* **Navigation**:
    * Dedicated pages for Menu, Laporan (Reports), Pembayaran (Payment confirmation/history), and Pesanan (Order details/history).
* **Styling**:
    * Utilizes Tailwind CSS for a utility-first styling approach.
    * Custom fonts: DM Sans and Plus Jakarta Sans.

## Tech Stack

* **Framework/Library**: React 19
* **Build Tool**: Vite
* **Routing**: React Router DOM v7
* **Styling**: Tailwind CSS v3, PostCSS
* **HTTP Client**: Axios
* **Linting**: ESLint
* **Icons**: React Icons

## Prerequisites

* Node.js (v18.x or later recommended, based on ESLint config and Vite/Tailwind common practices)
* npm (or yarn)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd fe-resto-lebron
    ```
    (Project name based on `package.json`)
3.  **Install dependencies:**
    ```bash
    npm install
    ```
    (or `yarn install`)

## Available Scripts

In the project directory, you can run:

* **`npm run dev`**
    Runs the app in development mode using Vite. Open [http://localhost:5173](http://localhost:5173) (default Vite port) to view it in the browser. The page will reload if you make edits.

* **`npm run build`**
    Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

* **`npm run lint`**
    Lints the project files using ESLint to check for code quality and style issues.

* **`npm run preview`**
    Serves the production build from the `dist` folder locally. This is a way to test the production build before deploying.
