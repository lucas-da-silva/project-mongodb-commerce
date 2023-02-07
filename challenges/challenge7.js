db.products.find(
  {
    sold: { $ne: 50 },
    tags: { $exists: false },
  },
  {
    _id: 0,
    name: 1,
    sold: 1,
  },
);
