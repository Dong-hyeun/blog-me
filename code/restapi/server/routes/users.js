const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      //DB에 데이터 업데이트
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
          // 쿼리 결과는 update 이전 값을 반환하므로 아래와 같이
          //  new: true로 지정하면, updated된 값, 수정 이후의 값을 반환
        },
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(401)
      .json({ success: false, msg: 'you can update only your account!' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    // 삭제된 유저의 모든 post 삭제
    try {
      const user = await User.findById(req.params.id);
      try {
        //DB에 데이터 삭제
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted...');
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json('User not found!');
    }
  } else {
    res
      .status(401)
      .json({ success: false, msg: 'you can update only your account!' });
  }
});

//GET USER
// 유저 정보 가져오기: 나중에 유저의 상태에 따른 처리하기 위함
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
