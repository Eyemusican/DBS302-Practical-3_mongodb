
// Step 4: Create Indexes

// Index 1: Orders by User and Date
db.orders.createIndex(
  { userId: 1, createdAt: -1 },
  { name: "idx_orders_user_createdAt" }
);

// Index 2: Orders by Status and Date (ESR Rule)
db.orders.createIndex(
  { status: 1, createdAt: -1, grandTotal: 1 },
  { name: "idx_orders_status_createdAt_grandTotal" }
);

// Index 3: Products by Category and Price
db.products.createIndex(
  { categoryId: 1, price: 1 },
  { name: "idx_products_category_price" }
);

// Index 4: Text Index for Product Search
db.products.createIndex(
  { name: "text", tags: "text" },
  {
    name: "idx_products_text",
    weights: { name: 10, tags: 5 }
  }
);

// Verify all indexes
db.orders.getIndexes();
db.products.getIndexes();