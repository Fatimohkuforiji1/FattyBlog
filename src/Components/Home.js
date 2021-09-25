import { React, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

// const Home = () => {
//   const [name, setName] = useState("Fatty");
//   const [age, setAge] = useState(20);

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
//     </div>
//   );
// };
