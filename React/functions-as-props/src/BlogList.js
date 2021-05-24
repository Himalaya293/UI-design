const BlogList = ({blogs,dept,handleDelete}) => {

    
    return ( 
        <div className="blog-list">
            <h2>{dept}</h2>
            {blogs.map((blog)=>(
              <div className="blog-preview" key={blog.id}>
              <h2>{blog.Firstname}</h2>
              <p>Works as an {blog.dept}</p>
              <button onClick={() => handleDelete(blog.id)}>delete blog</button>
              </div>
          ))}
        </div>
     );
}
 
export default BlogList;