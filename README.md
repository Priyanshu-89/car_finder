# 🚗 Car Finder App

A simple and responsive Car Finder web application built with **Next.js (App Router)**. Users can view a list of popular cars, check detailed specs, and manage their wishlist using local storage.

---

## ✨ Features

- Browse a list of 15 popular Indian cars
- View individual car details (dynamic routing)
- Add/remove cars from the wishlist (stored in localStorage)
- Clean UI with responsive layout
- Uses **Next.js App Router** for routing

---

## 🗂️ Folder Structure (App Router)

app/
├── car/
│   └── [id]/
│       └── page.js          # Dynamic route for car detail
├── components/
│   ├── CarCard.js           # Car card used in grid
│   └── Filters.js           # Optional filters
├── data/
│   └── cars.js              # Car data array
├── utils/
│   └── localStorageUtils.js # Wishlist logic
└── layout.js                # Root layout for App Router


🔗 Routing

Home page (e.g. app/page.js) should list cars using the CarCard component.

Car details route: /car/[id] handled by app/car/[id]/page.js

📦 Data Source

Static car list stored in app/data/cars.js. Each car object contains:

{
  id: 1,
  name: "Hyundai i20",
  brand: "Hyundai",
  price: 700000,
  fuel: "Petrol",
  seats: 5,
  image: "/images/i20.jpg",
  description: "A stylish and premium hatchback."
}

🛠 Technologies

React.js

Next.js  (App Router)

Tailwind CSS

🧪 How to Run

npm install
npm run dev

Visit: http://localhost:3000

📁 Images

Place all car images inside public/images/ folder (e.g. public/images/i20.jpg).

---

## 👤 Created By

**Priyanshu Kumari**

