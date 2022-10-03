import './single.css';
import Sidebar from '../../components/Sidebar/sidebar';
import SinglePost from '../../components/SinglePost/singlePost';

function Single(props) {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
