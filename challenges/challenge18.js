db.products.updateMany(
  {
    name: { $in: ["Big Mac", "Quarteirão com Queijo"] },
  },
  {
    $push: {
      ingredients: "bacon",
    },
  },
);

db.products.find({}, { _id: 0, name: 1, ingredients: 1 });
