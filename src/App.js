import Navbar from "./Navbar";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Details from "./Details";
import NotFound from "./NotFound";
import Contact from "./Contact";
import SideProject from "./SideProject";
import Favourite from "./Favourite";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
            <Route path="/create" exact element={<Create />}></Route>
            <Route path="/favourite" exact element={<Favourite />}></Route>
            <Route path="/sideproject" exact element={<SideProject />}></Route>
            <Route path="/contact" exact element={<Contact />}></Route>
            <Route path="/page/:id" exact element={<Details />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
