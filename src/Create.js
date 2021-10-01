import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Fatimoh");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const blog ={ title, body, author}
    //console.log(blog)

    setIsLoading(true)

    fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log("new blog added")
        setIsLoading(false)
        history.push("/")
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog tile:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Blog body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label> Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Yetunde">Yetunde</option>
          <option value="Fatimoh">Fatimoh</option>
        </select>

        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding blog..</button>}

        {/* used to display paragraph t0 screen
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Create;
