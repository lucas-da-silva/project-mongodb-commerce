db.products
  .find({}, { _id: 0, name: 1, sold: 1 })
  .limit(1)
  .sort({ sold: -1 });