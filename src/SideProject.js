import List from "./List";
import useFetch from "./useFetch";

const SideProject = () => {
  const blogs = [
    {
      title: "ChatterBox",
      tech: "TypeScript, Rust",
      role: "I built a GIF Tracker app using MERN.",
      description:
        "Want to chat in rooms with your friends? ChatterBox is a live chat room where you can talk to your friends, anywhere, anytime!",
      id: 6,
      git: "https://chatapp-rust.onrender.com",
    },    {
      title: "Real-Time Whiteboard",
      tech: "Kotlin, JavaFx, AWS, SQLite",
      role: "I built a GIF Tracker app using MERN.",
      description:
        "The perfect real-time whiteboard collaboration tool for students and group projects",
      id: 7,
      git: "https://student.cs.uwaterloo.ca/~cs346/1239/course-project/gallery/index.html#real-time-collaboration",
    },    {
      title: "GIF Tracker",
      tech: "MongoDB, Express.js, React, Node.js",
      role: "I built a GIF Tracker app using MERN.",
      description:
        "Developed a GIF Tracker that keeps track of the number of times a GIF has been used and favorited",
      id: 1,
      git: "https://giftracker.onrender.com/",
    },
    {
      title: "White Snea(:ers",
      tech: "React, Next.js, JavaScript, HTML, CSS",
      role: "I built an e-commerce site for white shoes.",
      description:
        "A fully functional mock e-commerce website for white sneakers!",
      id: 2,
      git: "https://sneakers-ebon.vercel.app/",
    },
    {
      title: "Can You Draw?",
      tech: "HTML, CSS, node.js, typescript, socket.io, canvas",
      role: "I worked on the frontend and made the design choices. I built the painting segment, from the brush size to the coordinates of the mouse to the colour. I also worked on media queries to maximize user experience and the problems that arise with different screen conditions.",
      description:
        "Can you draw? Let's figure it out! Challenge your friends to Can You Draw, a game where you draw and your friend guesses your drawing. There's a chatroom where you can text your friends live and let them hear what you think about their drawing!",
      git: "https://github.com/catherine-tao/CanYouDraw",
      id: 4,
    },
    {
      title: "Recipes To Go",
      tech: "React, MongoDB, node.js, Python",
      role: "I worked on the frontend and built a page that takes you from a list of recipes to the chosen recipe. The page displays the recipe details, pictures, and an interactive checklist.",
      description:
        "Tired of finding easy and affordable recipes? Recipes To Go will solve your problems for breakfast, lunch, and dinner!",
      git: "https://github.com/bilalc3/cooking-project-program",
      id: 5,
    },
  ];
  return (
    <div className="side">
      <h1>Here's what I've been up to lately. Click to learn more.</h1>
      {blogs && <List blogs={blogs} />}
    </div>
  );
};

export default SideProject;
