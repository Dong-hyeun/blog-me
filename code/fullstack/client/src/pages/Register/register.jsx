import { Link } from 'react-router-dom';
import './register.css';

function Register(props) {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label htmlFor="username">Username</label>
        <input
          className="registerInput"
          type="text"
          name="username"
          id="username"
          placeholder="유저 이름"
        />
        <label htmlFor="email">Email</label>
        <input
          className="registerInput"
          type="email"
          name="email"
          id="email"
          placeholder="이메일 입력"
        />
        <label htmlFor="password">Password</label>
        <input
          className="registerInput"
          type="text"
          name="password"
          id="password"
          placeholder="비번 입력"
        />
        <button className="registerBtn" type="submit">
          회원가입
        </button>
      </form>
      <button className="registerLoginBtn">
        <Link to="/login">로그인</Link>
      </button>
    </div>
  );
}

export default Register;
