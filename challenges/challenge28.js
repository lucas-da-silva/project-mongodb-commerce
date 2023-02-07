db.products.find({ ingredients: { $size: 4 } }).count();
