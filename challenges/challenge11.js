db.products.find(
  {
    name: {
      $nin: ["Big Mac", "McChicken"],
    },
  },
  { _id: 0, name: 1, likes: 1, sold: 1 },
);
