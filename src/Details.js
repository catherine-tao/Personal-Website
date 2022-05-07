import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {
  const { id } = useParams();
  const { data, load, error } = useFetch("http://localhost:8000/blogs/" + id);

  const goHome = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      goHome("/");
    });
  };

  console.log(id);
  return (
    <div className="side-details">
      {error && <div> {error} </div>}
      {load && <div>Loading...</div>}
      {data && (
        <article>
          <h1>{data.title}</h1>
          <hr></hr>

          <h2>Built with: {data.tech}</h2>
          <h2>My role: {data.role}</h2>
          <h2>Description: {data.description}</h2>
          <div>{data.body}</div>
          {data.git && (
            <button>
              <a href={data.git} className="gitbutton">
                Check it out on GitHub
              </a>
            </button>
          )}
        </article>
      )}
    </div>
  );
};

export default Details;
