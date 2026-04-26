// Step 2: Insert Sample Data

// 2.1 Insert Users
db.users.insertMany([
  {
    name: "Tashi Dorji",
    email: "tashi@example.com",
    phone: "+975-17-123-456",
    address: {
      line1: "Building 12",
      city: "Thimphu",
      country: "Bhutan",
      postalCode: "11001"
    },
    createdAt: new Date("2026-04-18T08:00:00Z")
  },
  {
    name: "Sonam Choden",
    email: "sonam@example.com",
    phone: "+975-17-654-321",
    address: {
      line1: "Flat 3B",
      city: "Phuntsholing",
      country: "Bhutan",
      postalCode: "21001"
    },
    createdAt: new Date("2026-04-19T10:30:00Z")
  }
]);

// 2.2 Insert Categories
db.categories.insertMany([
  { name: "Electronics", slug: "electronics", parentCategoryId: null },
  { name: "Accessories", slug: "accessories", parentCategoryId: null }
]);

// 2.3 Insert Products
db.products.insertMany([
  {
    name: "Wireless Bluetooth Headphones",
    slug: "wireless-bluetooth-headphones",
    categoryId: ObjectId("69edab8f01778c16ab3682d3"),
    price: 129.99,
    currency: "USD",
    stock: 200,
    attributes: {
      brand: "Acme Audio",
      color: "black",
      wireless: true,
      batteryLifeHours: 24
    },
    tags: ["audio", "wireless", "headphones"],
    createdAt: new Date("2026-04-18T10:00:00Z")
  },
  {
    name: "USB-C Cable 1m",
    slug: "usb-c-cable-1m",
    categoryId: ObjectId("69edab8f01778c16ab3682d4"),
    price: 9.99,
    currency: "USD",
    stock: 500,
    attributes: {
      brand: "Acme Tech",
      lengthMeters: 1,
      color: "white"
    },
    tags: ["cable", "usb-c"],
    createdAt: new Date("2026-04-18T11:00:00Z")
  },
  {
    name: "Mechanical Keyboard",
    slug: "mechanical-keyboard",
    categoryId: ObjectId("69edab8f01778c16ab3682d3"),
    price: 79.99,
    currency: "USD",
    stock: 150,
    attributes: {
      brand: "Acme Input",
      layout: "US",
      switchType: "blue",
      backlight: true
    },
    tags: ["keyboard", "mechanical", "backlit"],
    createdAt: new Date("2026-04-19T09:00:00Z")
  }
]);

// 2.4 Insert Orders
db.orders.insertMany([
  {
    userId: ObjectId("69edaadc01778c16ab3682d1"),
    status: "PAID",
    items: [
      {
        productId: ObjectId("69edb9dd01778c16ab3682da"),
        productName: "Wireless Bluetooth Headphones",
        unitPrice: 129.99,
        quantity: 2,
        lineTotal: 259.98
      },
      {
        productId: ObjectId("69edb9dd01778c16ab3682db"),
        productName: "USB-C Cable 1m",
        unitPrice: 9.99,
        quantity: 1,
        lineTotal: 9.99
      }
    ],
    grandTotal: 269.97,
    currency: "USD",
    createdAt: new Date("2026-04-19T15:30:00Z"),
    paymentMethod: "CARD"
  },
  {
    userId: ObjectId("69edaadc01778c16ab3682d2"),
    status: "PAID",
    items: [
      {
        productId: ObjectId("69edb9dd01778c16ab3682dc"),
        productName: "Mechanical Keyboard",
        unitPrice: 79.99,
        quantity: 1,
        lineTotal: 79.99
      }
    ],
    grandTotal: 79.99,
    currency: "USD",
    createdAt: new Date("2026-04-20T09:15:00Z"),
    paymentMethod: "COD"
  }
]);