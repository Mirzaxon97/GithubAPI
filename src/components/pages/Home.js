import React, {useState} from 'react';
import Card from '../UI/Card'
const Home = (props) => {
    
    const {data=[]}=props;

     const [load,setLoad]=useState(true);

    



    return (
     <>
         {
            data.map(user=> <Card user={user} key={user.id}/>)
         }
     
         
     </>
    );
};

export default Home;
