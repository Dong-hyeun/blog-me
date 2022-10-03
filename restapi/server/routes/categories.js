const router = require('express').Router();
const Category = require('../models/Category');

// Category CREATE - 새 카테고리 생성
router.post('/', async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    // 새 카테고리 저장
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Category GET - 카테고리 조회
router.get('/', async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
