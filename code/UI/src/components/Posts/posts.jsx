import Post from '../Post/post';
import './posts.css';

function Posts(props) {
    return (
        <div className='posts'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Posts;