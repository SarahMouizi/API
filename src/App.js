import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards from './Cards';




function App() {
  const[usersList,setUsersList]=useState([]);


useEffect(()=>
  { axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res=>{setUsersList(res.data)
    console.log(res.data)})
    .catch((Error)=>console.log(Error))
  }, [])




  return (
    <div className="App"  style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-between'}}                 >
   
      {usersList.map((el)=>(<Cards users={el}/>))}
   
    </div>
  );
}

export default App;
