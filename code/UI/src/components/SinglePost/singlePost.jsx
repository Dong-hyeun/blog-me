import './singlePost.css';

function SinglePost(props) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="/assets/images/postImg1.jpg"
          alt="post-img"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAutor">
            Autor: <b>Donghyun</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptatibus eius dolor officiis itaque eos quis suscipit, distinctio
          alias tempora velit autem quia ullam blanditiis ipsum quas incidunt
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptatibus eius dolor officiis itaque eos quis suscipit, distinctio
          alias tempora velit autem quia ullam blanditiis ipsum quas incidunt
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptatibus eius dolor officiis itaque eos quis suscipit, distinctio
          alias tempora velit autem quia ullam blanditiis ipsum quas incidunt
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptatibus eius dolor officiis itaque eos quis suscipit, distinctio
          alias tempora velit autem quia ullam blanditiis ipsum quas incidunt
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptatibus eius dolor officiis itaque eos quis suscipit, distinctio
          alias tempora velit autem quia ullam blanditiis ipsum quas incidunt.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
