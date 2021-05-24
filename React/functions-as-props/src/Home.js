import {useState,useEffect}from 'react';
import BlogList from './BlogList';

 const Home = () => {
    const [blogs,setBlogs]=useState([
        {Firstname:'hima',Lastname:'laya',id:1,dept:'software Engineer'},
        {Firstname:'Sanju',Lastname:'Lahari',id:2,dept:'Hr'},
        {Firstname:'Jyothi',Lastname:'Chabriya',id:3,dept:'Management Traniee'}
    ]);

    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog => blog.id!==id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('Function Deleted');
        console.log(blogs);
    });

    return ( 
        <div className="home">
          <BlogList blogs={blogs} dept="All Employees List" handleDelete={handleDelete} />
        </div>
     );
}


export default Home;