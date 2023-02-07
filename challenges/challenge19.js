db.products.updateMany(
  {},
  {
    $pull: {
      ingredients: "cebola",
    },
  },
);

db.products.find({}, { _id: 0, name: 1, ingredients: 1 });
