import { Link } from "react-router-dom";
import List from "./List";
import useFetch from "./useFetch";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Get to know me!</h1>
      <h2>
        <i>
          Hi I'm Catherine and I'm a second year Computer Science student at the
          University of Waterloo! I love to read, eat, bake, and code.
        </i>
      </h2>
      <br></br>
      <p>
        <b>Languages</b>: JavaScript, C, HTML, CSS, Python
      </p>
      <p>
        <b>Tools/Frameworks</b>: Git, React, LaTeX,
      </p>
      <br></br>

      <p>
        I've worked on a recipe app and a game similar to scribble.io. Check
        them out under: <Link to="/sideproject">side projects</Link>.
      </p>
    </div>
  );
};

export default Homepage;
