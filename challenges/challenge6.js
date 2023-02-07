db.products.find(
  {
    likes: { $gt: 10, $lt: 100 },
  },
  {
    _id: 0,
    name: 1,
    likes: 1,
  },
);
