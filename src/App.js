import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Create from "./Create";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// function App() {
//   const myblog = "Welcome to my Blog";
//   return (
//     <div className="App">
//       <Navbar />
//       <h3>{myblog}</h3>
//       <div className="content">
//         <Home />
//       </div>
//     </div>
//   );
// }
