const express = require('express');
const multer = require('multer');
const app = express();
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const categoryRouter = require('./routes/categories');

dotenv.config();

const port = process.env.PORT || 5000;
const MongoDB_URL = process.env.MONGO_URL;

//bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 몽구스 연결하기
require('mongoose')
  .connect(`${MongoDB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('성공적으로 몽고디비에 연결되었습니다.')) //연결 성공
  .catch(e =>
    console.error(`
        몽구스에 연결하는데 실패했습니다. \n error message:'+ ${e.message}
    `),
  );

// multer config
const storage = multer.diskStorage({
  // 업로드할 파일을 보관할 경로 설정
  destination: (req, file, cb) => {
    cb(null, 'server/uploads');
  },
  // 전달받은 이름으로 파일명 생성
  filename: (req, file, cb) => {
    cb(null, 'dogImages.jpg');
    // cb(null, req.body.name);
  },
});

// 파일이 저장될 위치 지정 및 업로드 로직 라우팅 처리
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res
    .status(200)
    .json({ sucess: true, result: '파일이 성공적으로 업로드 되었습니다.' });
});

//routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/categories', categoryRouter);

app.use('/', (req, res) => res.send('웹서버 실행중..'));

app.listen(port, () =>
  console.log(`Running The expresss server! \n http://localhost:${port}`),
);
