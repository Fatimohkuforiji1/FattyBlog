const BlogList = ({blogs, title}) => {
   
    return (
      <div>
          <h3>{title}</h3>
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
}
 
export default BlogList;

// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title}

//using destructuring 
//const BlogList = ({blogs, title}) => {}

