import { React, useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    setTimeout(()=>{
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if(!res.ok){
            throw Error("Could not fetch the data for the resource")
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null)
        })
        .catch(err=>{
          setIsLoading(false);
          setError(err.message)
        })
    }, 1000)
  
}, [])
  return (
    <div className="home">
        {error && <div> {error}</div>}
        {isLoading && <div>Page loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

// const Home = () => {
//   const [name, setName] = useState("Fatty");
//   const [age, setAge] = useState(20);

// handleDelete
// const handleDelete =(id)=>{
//   const newBlog = blogs.filter(blog => blog.id !== id)
//   setBlogs(newBlog)
// }
//<button onClick={() => handleDelete(blog.id)}>Delete Blog</button>;

//   const handleClick = () => {
//     setName("Yetty");
//     setAge(30);
//   };
//   return (
//     <div>
//       <h4>HomePage</h4>
//       <p>
//         {name} is {age} years old
//       </p>
//       <button onClick={handleClick}>Click Me</button>
//reusing the component 
  // <BlogList blogs={blogs} title="All Blogs" />
  // <BlogList
  //   blogs={blogs.filter((blog) => blog.author === "mario")}
  //   title="Mario's Blogs"
  // />

//     </div>
//   );
// };
