
import { useEffect, useState } from 'react';
import './App.css';
import Home from './componetns/Home';
import {auth,provider} from './Configure';
import { signInWithPopup } from 'firebase/auth';


function App() {
 const [value,setValue] = useState('');
  const handleClick = ()=>{
    signInWithPopup(auth,provider).then((data)=>{
setValue(data.user.email)
localStorage.setItem("email",data.user.email)
    })
  }
 useEffect(()=>{
  setValue(localStorage.getItem('email'))
},[])


  return (
    <div className="App">
      {value?<Home/>:
      <button className='google-btn' onClick={handleClick}>Login with Google</button>
    }
    </div>
  );
}


export default App;
