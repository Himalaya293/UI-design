import {useState}from 'react';

const Home = () => {
    let name2='motivity';
    const Click=()=>{
        console.log('hello');
    }
    const ClickAgain=(name)=>{
        name2='labs';
        console.log('hello'+name);
    }
    return ( 
        <div className="home">
            <h2>Welcome to Homepage</h2>
            <p>Please fill the details to signup</p>
            <div className="links">
                <button onClick={Click}>sign up</button>
                <button onClick={() => ClickAgain('hima')}>log in</button>
                <p>{name2}</p>
            </div>
        </div>
     );
}

export default Home;

<h6>-------------Using State(Use State Hook)--------------</h6>

 const Homel = () => {

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
