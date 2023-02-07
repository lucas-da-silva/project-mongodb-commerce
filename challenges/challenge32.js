db.products.find(
  {
    sold: { $mod: [5, 0] },
  },
  { _id: 0, name: 1, sold: 1 },
);
