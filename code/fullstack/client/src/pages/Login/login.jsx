import { Link } from 'react-router-dom';
import './login.css';

function Login(props) {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label htmlFor="email">Email</label>
        <input
          className="loginInput"
          type="email"
          name="email"
          id="email"
          placeholder="이메일 입력"
        />
        <label htmlFor="password">Password</label>
        <input
          className="loginInput"
          type="text"
          name="password"
          id="password"
          placeholder="비번 입력"
        />
        <button className="loginBtn" type="submit">
          로그인
        </button>
      </form>
      <button className="loginRegisterBtn">
          <Link to='/register'>회원가입</Link>
      </button>
    </div>
  );
}

export default Login;
