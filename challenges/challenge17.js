db.summaryProducts.insertOne({
  franchise: "McDonalds",
  totalProducts: 5,
});

db.summaryProducts.find({}, { _id: 0, franchise: 1, totalProducts: 1 });
