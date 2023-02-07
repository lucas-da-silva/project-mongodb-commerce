db.products.updateMany(
  {},
  {
    $push: {
      nutritionalValues: {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

db.products.find({}, { _id: 0, name: 1, nutritionalValues: 1 });
