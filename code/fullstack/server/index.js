const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const path = require('path');

dotenv.config();
const MongoDB_URL = process.env.MONGO_URL;
console.log(MongoDB_URL);

app.use(express.json());

mongoose
  .connect(`${MongoDB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('성공적으로 몽고디비에 연결되었습니다.')) //연결 성공
  .catch(e =>
    console.error(`
        몽구스에 연결하는데 실패했습니다. \n error message:'+ ${e.message}
    `),
  );

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

//정적 라우팅 처리
app.use('/images', express.static(path.join(__dirname, 'uploads')));

// 라우터 처리
app.get('/', (req, res) => {
  res.send('서버 연결 성공');
});
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

// 404 미들웨어
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// 500 미들웨어
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen('5000', () => {
  console.log('Backend is running.');
});
