import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
        const [blogs, setBlogs] = useState(null);
        const [isPending, setIsPending] = useState(true);


        const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
        }

        useEffect(async() => {
            setTimeout(() => {
                fetch('http://localhost:8000/blogs')
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        setBlogs(data);
                        setIsPending(false);
                    });
                .catch(err => {
                    console.log(err.message);
                })
            }, 1000);
        }, []);

        return ( <
                div className = "home" > {
                    isPending && < div > Loading... < /div>} {
                        blogs && < BlogList blogs = { blogs }
                        dept = "All Employees List"
                        handleDelete = { handleDelete }
                        />} <
                        /div>
                    );
                }


                export default Home;