const Category = require('../models/Category');

const createCategory = async (req, res) => {
  const { name, description,userId } = req.body;

  try {
    const category = new Category({
      name,
      description,
      user: userId, 
    });

    await category.save();
    res.status(201).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating category.', error });
  }
};

module.exports={createCategory}