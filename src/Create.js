import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const [load, setLoad] = useState(false);

  const goHome = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = { title, body };

    setLoad(true);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(stored),
    }).then(() => {
      setLoad(false);
      goHome("/");
    });
  };

  return (
    <div className="create">
      <h2>New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body text</label>
        <input
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        {!load && <button>Add Blog</button>}
        {load && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
