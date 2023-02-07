db.products.updateOne(
  {
    name: "Cheddar McMelt",
  },
  {
    $pop: {
      ingredients: 1,
    },
  },
);

db.products.find({}, { _id: 0, name: 1, ingredients: 1 });
