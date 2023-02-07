db.products.updateMany(
  {
    "nutritionalValues.2.percentual": { $gt: 20, $lt: 40 },
  },
  {
    $push: {
      tags: "contains sodium",
    },
  },
);

db.products.find({}, { _id: 0, name: 1, tags: 1 });
