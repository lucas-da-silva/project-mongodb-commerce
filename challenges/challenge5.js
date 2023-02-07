db.products.find(
  {
    $or: [{ likes: 36 }, { sold: 85 }],
  },
  {
    _id: 0,
    name: 1,
    likes: 1,
    sold: 1,
  },
);
