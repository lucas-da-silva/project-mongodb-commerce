db.products.updateMany(
  {},
  {
    $set: { rating: NumberInt(0) },
  },
);

db.products.updateMany(
  { tags: "bovino" },
  {
    $inc: { rating: NumberInt(5) },
  },
);

db.products.updateMany(
  { tags: "ave" },
  {
    $inc: { rating: NumberInt(3) },
  },
);

db.products.find({}, { _id: 0, name: 1, rating: 1 });
