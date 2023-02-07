db.products.updateMany(
  {},
  {
    $set: { createdBy: "Ronald McDonald" },
  },
);

db.products.find({}, { _id: 0, name: 1, createdBy: 1 });
