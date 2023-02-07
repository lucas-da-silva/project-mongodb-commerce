db.products.find(
  {
    $expr: { $gt: ["$likes", "$sold"] },
  },
  { _id: 0, name: 1 },
);
