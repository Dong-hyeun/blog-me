const router = require('express').Router();
const Post = require('../models/Post');

// Post CREATE - 새 포스팅 생성
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  // 요청된 게시글 정보를 가져와서 newPost 변수에 담기
  try {
    const savedPost = await newPost.save();
    // save(): 새 게시글 저장
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post UPDATE - 포스팅 내용 변경
router.put('/:id', async (req, res) => {
  // ':id'는 postId
  try {
    const post = await Post.findById(req.params.id);
    // findById: postId에 해당하는 게시물 하나를 조회
    if (post.username === req.body.username) {
      // 디비에 저장된 post username과 요청받은 username을 비교
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true },
        );
        // findByIdAndUpdate: postId에 해당하는 게시물을 수정
        res.status(200).json({ success: true, updatedPost });
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json('You can update only your post!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post DELETE - 포스팅 삭제
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        //해당 게시물을 삭제
        res.status(200).json('Your post has been deleted...');
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json('You can delete only your post!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post GET - post 상세 페이지 조회
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
    // postId에 해당하는 게시물 하나를 전달
  } catch (err) {
    res.status(500).json(err);
  }
});

// ALL Post GET - post 목록(리스트) 페이지 조회
router.get('/', async (req, res) => {
  const username = req.query.user; //user?key=value 형태로 올 때
  const category = req.query.category; //category?key=value 형태로 올 때
  try {
    let posts;
    if (username) {
      // '/user?' 으로 요청된 경우
      posts = await Post.find({ username });
    } else if (category) {
      // '/cat?' 으로 요청된 경우
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find();
      //모든 게시글 조회
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
