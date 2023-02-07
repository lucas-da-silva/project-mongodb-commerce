db.products.find({ name: { $regex: /mc/gi } }).count();
