const Category = require('../models/Category');
const Product = require('../models/Product');

const createProduct = async (req, res) => {
  const { name, price, description, categoryId } = req.body;

  try {
    const product = new Product({
      name,
      price,
      description,
      category: categoryId, // Map `categoryId` from the request body
    //   user: req.user._id, // Add the logged-in user's ID
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: 'Product created successfully!',
      product,
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating product.',
      error,
    });
  }
};

const getCategoriesWithProducts = async (req, res) => {
    try {
      const categories = await Category.aggregate([
        {
          $lookup: {
            from: 'products', // Collection name of the Product model
            localField: '_id', // Field in the Category model
            foreignField: 'category', // Field in the Product model
            as: 'products', // Alias for the resulting array
          },
        },
      ]);
  
      res.status(200).json({
        success: true,
        message: 'Categories with products retrieved successfully!',
        categories,
      });
    } catch (error) {
      console.error('Error retrieving categories with products:', error);
      res.status(500).json({
        success: false,
        message: 'Error retrieving categories with products.',
        error,
      });
    }
  };

module.exports = { createProduct,getCategoriesWithProducts };
