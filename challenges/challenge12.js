db.products.updateMany(
  {
    name: { $ne: "McChicken" },
  },
  {
    $addToSet: { ingredients: "ketchup" },
  },
);

db.products.find({}, { _id: 0, name: 1, ingredients: 1 });
