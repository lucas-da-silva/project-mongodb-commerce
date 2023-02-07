db.products.updateMany(
  {},
  {
    $rename: { description: "descriptionWebsite" },
  },
);

db.products.find({}, { _id: 0, name: 1, descriptionWebsite: 1 });
