db.products.updateOne(
  { name: "Big Mac" },
  {
    $unset: { likes: "" },
  },
);

db.products.find({}, { _id: 0, name: 1, likes: 1 });
