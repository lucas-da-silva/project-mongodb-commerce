db.products.find(
  {
    "nutritionalValues.0.amount": { $lt: 500 },
  },
  { _id: 0, name: 1 },
);
