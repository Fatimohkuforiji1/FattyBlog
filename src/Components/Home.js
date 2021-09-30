import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");
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
