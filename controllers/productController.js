// eslint-disable-next-line import/no-unresolved
const Product = require('../model/productmodel');
const catchAsync = require('../utils/catchAsync');

exports.getAllProducts = catchAsync(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    status: 'success',
    data: {
      products,
    },
  });
});
exports.getProduct = catchAsync(async (req, res) => {
  const product = await Product.find({ _id: req.params.id });
  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.createProduct = catchAsync(async (req, res) => {
  // console.log(req.body);
  const product = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'sucess',
    data: null,
  });
});
exports.updateProduct = catchAsync(async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'sucess',
    data: updatedProduct,
  });
});
