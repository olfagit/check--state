import './App.css';
import {useState} from 'react';
import Profile from './Profile';

function App() {

const [Show,setShow]=useState(false)

function change(){setShow(!Show)}

const [time,setTime]=useState(0)

function timer(){
  setInterval(()=>{setTime(time+1)},1000)}
  clearInterval(timer())

return (
  <div className="App">
{Show && <Profile/>}
<button onClick={change}>click here</button>
<span>{Show}</span>
{Show ? <p>time is {time}</p> :0}

  </div>
);
}

export default App;
