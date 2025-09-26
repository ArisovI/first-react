import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();

  const [post, setPost] = useState([]);

  function getPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }

  useEffect(() => {
    getPost();
  }, [params.id]);

  const navigate = useNavigate();

  function goToHome() {
    navigate(-2, { viewTransition: true });
  }

  function goToPosts() {
    navigate(-1, { viewTransition: true });
  }

  return (
    <div>
      <button onClick={goToHome}>go to home</button>
      <button onClick={goToPosts}>go to posts</button>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;
