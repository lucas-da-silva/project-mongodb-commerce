db.products.find(
  {
    "nutritionalValues.3.percentual": { $gte: 30, $lte: 40 },
  },
  { _id: 0, name: 1 },
);
