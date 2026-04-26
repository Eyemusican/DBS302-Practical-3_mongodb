// Step 5: Query Performance Analysis using explain()

// BEFORE Index - Force Collection Scan using $natural hint
// This simulates query without index (COLLSCAN)
db.orders.find(
  { status: "PAID", createdAt: { $gte: new Date("2026-04-19") } }
).sort({ createdAt: -1 }).hint({ $natural: 1 }).explain("executionStats");

// AFTER Index - Query uses index automatically
// This shows index scan (IXSCAN)
db.orders.find(
  { status: "PAID", createdAt: { $gte: new Date("2026-04-19") } }
).sort({ createdAt: -1 }).explain("executionStats");