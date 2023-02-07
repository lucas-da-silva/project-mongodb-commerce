db.products.updateMany(
  {
    "nutritionalValues.2.percentual": { $gte: 40 },
  },
  {
    $push: {
      tags: "too much sodium",
    },
  },
);

db.products.find({}, { _id: 0, name: 1, tags: 1 });
