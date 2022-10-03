const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// 회원가입
router.post('/register', async (req, res) => {
  try {
    // bcrypt 적용
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(req.body.password, salt);
    console.log(hashedPw);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPw,
    });

    // 디비에 회원정보 등록
    const user = await newUser.save();
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: 'account that already exists!',
      err,
    });
  }
});

// 로그인
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user &&
      res
        .status(400)
        .json({ success: false, msg: 'wrong username credentials!' });

    const validated = await bcrypt.compare(req.body.password, user.password);

    !validated &&
      res
        .status(400)
        .json({ success: false, msg: 'wrong password credentials!' });

    const { password, ...users } = user._doc;
    // 나머지 연산자를 이용하여 password를 뺀 나머지 데이터를 클라이언트에 전달
    // 이걸로 인증 상태 구현

    res.status(200).json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: 'false', err });
  }
});

module.exports = router;
