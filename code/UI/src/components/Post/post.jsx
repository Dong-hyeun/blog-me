import './post.css';

function Post(props) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="./assets/images/postImg1.jpg"
        alt="post-img"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quas
        maxime earum incidunt esse cupiditate error reiciendis, quo, laborum,
        qui non? Sit reprehenderit labore ab perferendis, numquam eveniet
        tenetur fugit? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Neque quas maxime earum incidunt esse cupiditate error reiciendis, quo,
        laborum,
      </p>
    </div>
  );
}

export default Post;
