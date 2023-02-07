db.products
  .find(
    {
      sold: { $gt: 50, $lt: 100 },
    },
    {
      _id: 0,
      name: 1,
      sold: 1,
    },
  )
  .sort({ sold: 1 });
