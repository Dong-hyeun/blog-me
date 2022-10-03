import './home.css';
import Header from '../../components/Header/header';
import Posts from '../../components/Posts/posts';
import Sidebar from '../../components/Sidebar/sidebar';

function Home(props) {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
