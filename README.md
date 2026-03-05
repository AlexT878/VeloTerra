# 🚲 VeloTerra - Bike Shop E-Commerce

A fully responsive, feature-rich e-commerce application for bicycles. Built with React, Redux Toolkit, and Supabase, this project demonstrates modern frontend architecture, role-based authentication, and robust state management.

<img width="100%" alt="VeloTerra Landing Page" src="https://github.com/user-attachments/assets/61952864-0e81-4b99-a9d1-1014646967eb" />

## ✨ Features

* **Role-Based Access Control:**
    * **Visitors:** Can browse the product catalog, filter/sort items, add items to the shopping cart, toggle dark/light mode, and use the contact form.
    * **Admins:** Logged in via Supabase Authentication. Admins unlock an exclusive UI to add new products to the database or remove existing ones directly from the product grid.
* **Advanced Data Handling:**
    * Client-side sorting (by price or name), filtering (by category), and pagination.
    * State is cleanly managed via URL Search Parameters, making search results and specific pages shareable.
* **Modern State Management:**
    * Powered by Redux Toolkit with dedicated slices for `auth`, `bikes`, `cart`, and `theme`.
* **Persistent UI & Cart:**
    * `localStorage` is utilized to persist the user's theme preference (Light/Dark mode) and their shopping cart items across sessions.
* **Supabase Integration:**
    * Handles database operations (fetching, inserting, deleting products), contact form submissions, and administrator authentication.

## 📸 Screenshots

### 💻 Desktop View
<img width="100%" alt="VeloTerra Desktop View" src="https://github.com/user-attachments/assets/21b65c63-17a0-4ae8-bbe8-6192d31fd1ea" />

### 📱 Mobile View
<img width="300" alt="VeloTerra Mobile View" src="https://github.com/user-attachments/assets/dcdc156f-caf3-49c6-b4e1-d04650cc1e09" />

## 🛠️ Tech Stack

* **Frontend:** React (Vite), React Router DOM
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Backend / BaaS:** Supabase (PostgreSQL Database & Authentication)
* **Styling:** Native CSS with CSS Variables for Theme Management
* **Icons:** Lucide React

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
* Node.js (v16 or higher recommended)
* npm or yarn
* A Supabase project

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/AlexT878/VeloTerra.git](https://github.com/AlexT878/VeloTerra.git)
    cd VeloTerra
    ```

2.  **Install NPM packages**
    ```sh
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server**
    ```sh
    npm run dev
    ```
