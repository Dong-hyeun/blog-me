import './header.css';

function Header(props) {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="/assets/images/headerImg.jpg"
        alt="header-img"
      />
    </div>
  );
}

export default Header;
