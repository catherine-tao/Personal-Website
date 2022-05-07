import { Link } from "react-router-dom";

const List = (props) => {
  const blogs = props.blogs;
  return (
    <div className="blog-list">
      {blogs.map((blogitem) => (
        <div className="side" key={blogitem.id}>
          <Link to={`/page/${blogitem.id}`}>
            <h2>{blogitem.title}</h2>
          </Link>
          <p>Built with: {blogitem.tech}</p>
          <p>My role: {blogitem.role}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
