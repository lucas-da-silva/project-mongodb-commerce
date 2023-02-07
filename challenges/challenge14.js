db.products.find(
  {
    ingredients: "picles",
  },
  {
    _id: 0,
    name: 1,
    ingredients: 1,
    nutritionalValues: { $slice: 3 },
  },
);
