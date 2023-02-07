db.products.deleteMany({
  likes: { $lt: 50 },
});

db.produtos.find({}, { _id: 0, name: 1 });