db.products.updateMany(
  {},
  {
    $push: {
      salesPerDay: {
        $each: [0, 0, 0, 0, 0, 0, 0],
      },
    },
  },
);

db.products.updateMany(
  { name: "Big Mac" },
  {
    $inc: {
      "salesPerDay.3": 60,
    },
  },
);

db.products.updateMany(
  { tags: "bovino" },
  {
    $inc: {
      "salesPerDay.6": 120,
    },
  },
);

db.products.find({}, { _id: 0, name: 1, salesPerDay: 1 });
