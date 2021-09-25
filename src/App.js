import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  
    return (
    <div className="App">
      <Navbar/>

      <div className="content">
        <Home />
      </div>
    </div>
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
