const BlogList = (props) => {
    const blogs = props.blogs;
    const dept = props.dept;

    return ( <
        div className = "blog-list" >
        <
        h2 > { dept } < /h2> {
            blogs.map((blogs) => ( <
                div className = "blog-preview"
                key = { blogs.id } >
                <
                h2 > { blogs.Firstname } < /h2> <
                p > Works as an { blogs.dept } < /p> <
                /div>
            ))
        } <
        /div>
    );
}

export default BlogList;