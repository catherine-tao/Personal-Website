import List from "./List";
import useFetch from "./useFetch";

const SideProject = () => {
  const { data: blogs, load, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="side">
      <h1>Here's what I've been up to lately. Click to learn more.</h1>
      {error && <div> {error} </div>}
      {load && <div>Loading...</div>}
      {blogs && <List blogs={blogs} />}
    </div>
  );
};

export default SideProject;
