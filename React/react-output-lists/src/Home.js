import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { Firstname: 'hima', Lastname: 'laya', id: 1, dept: 'software Engineer' },
        { Firstname: 'Sanju', Lastname: 'Lahari', id: 2, dept: 'Hr' },
        { Firstname: 'Jyothi', Lastname: 'Chabriya', id: 3, dept: 'Management Traniee' }
    ]);
    return ( <
        div className = "home" >
        <
        BlogList blogs = { blogs }
        dept = "All Employees List" / >
        <
        BlogList blogs = { blogs.filter((blog) => blog.id === 3) }
        dept = "Imp" / >
        <
        /div>
    );
}


export default Home;