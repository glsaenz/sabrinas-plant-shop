# 🌿 Sabrina's Plant Shop

A full-stack e-commerce storefront for a plant shop, built as a portfolio project. Features a polished frontend, a Node.js/Express backend, product filtering and sorting, a live shopping cart, and a Stripe test checkout flow.

---

## 🖥️ Live Demo

> Test card: `4242 4242 4242 4242` — any future expiry, any CVC

---

## 📸 Features

- **Product catalogue** — 40 plants across 4 categories: Indoor, Flower, Tree, and Garden
- **Filter & sort** — filter by category or care level, sort by price or name
- **Shopping cart** — slide-out cart with quantity controls, item removal, and free shipping threshold
- **Stripe checkout** — full test checkout flow with success and cancel pages
- **Responsive design** — clean, modern UI built with vanilla HTML, CSS, and JavaScript
- **REST API** — Express backend serving product data as JSON

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| Payments | Stripe Checkout (test mode) |
| Data | JSON flat file |
| Fonts | Playfair Display, DM Sans |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher
- A free [Stripe account](https://stripe.com) for API keys

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/sabrinas-plant-shop.git
cd sabrinas-plant-shop
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the project root
```
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

4. Start the server
```bash
node server.js
```

5. Open your browser and visit `http://localhost:3000`

---

## 📁 Project Structure

```
sabrinas-plant-shop/
├── public/
│   ├── index.html        # Main storefront
│   ├── success.html      # Post-payment success page
│   ├── cancel.html       # Cancelled payment page
│   └── images/           # Plant product images (1.jpg - 40.jpg)
├── data/
│   └── products.json     # Product catalogue
├── server.js             # Express server & Stripe API routes
├── .env                  # API keys (not committed to Git)
├── .gitignore
└── README.md
```

---

## 💳 Stripe Test Mode

This project uses Stripe in **test mode**. No real payments are processed.

To simulate a successful purchase use the following test card details at checkout:

| Field | Value |
|---|---|
| Card number | `4242 4242 4242 4242` |
| Expiry | Any future date |
| CVC | Any 3 digits |
| ZIP | Any 5 digits |

For more test card scenarios visit the [Stripe testing docs](https://stripe.com/docs/testing).

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Returns all 40 products as JSON |
| GET | `/api/products/:id` | Returns a single product by ID |
| POST | `/api/create-checkout-session` | Creates a Stripe checkout session |

---

## 🌱 Product Categories

| Category | Count | Examples |
| 🪴 Indoor | 10 | Monstera, Snake Plant, ZZ Plant |
| 🌸 Flower | 10 | Rose, Lavender, Orchid |
| 🌳 Tree | 10 | Japanese Maple, Olive Tree, Bonsai |
| 🌱 Garden | 10 | Basil, Tomato, Strawberry Plant |

---

## 🔮 Future Improvements

- PostgreSQL database instead of JSON flat file
- Admin dashboard to manage products and orders
- Email confirmation on successful purchase
- Mobile responsive navigation

---

## 👩‍💻 Author

Built by Gabriel Saenz as a portfolio project to demonstrate full-stack web development skills including REST API design, frontend interactivity, and third-party payment integration.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).