import {useState}from 'react';


<h6>-------------Using State(Use State Hook)--------------</h6>

 const Home = () => {

    const [name1,setName]=useState('hima');
    const handleClick=()=>{
        setName('laya');
    }
    return ( 
        <div className="home">
            <h2>Welcome to Homepage</h2>
                <p>{name1}</p>
                <button onClick={handleClick}>sign up</button>
        </div>
     );
}


export default Home;