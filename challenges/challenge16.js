db.products.updateOne(
  { name: "Big Mac" },
  {
    $currentDate: { lastModification: true },
  },
);

db.products.find({ lastModification: { $exists: true } }, { _id: 0, name: 1 });
