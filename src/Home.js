import logo from './logo.svg';
import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './App.css';
import {setcount} from './action'
 
function Home() {
  const countNew=useSelector(state=>state.test);
  const dispatch=useDispatch();
  const history=useHistory();
  const [value,setValue]=useState("2")
  return (
    <div className="App">
      {/* <header className="App-header">
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h4>Count:{countNew.count}</h4>
      <h4>Name:{countNew.ajit1}</h4>
      <h4>Value:{value}</h4>
   
      <button onClick={()=>{
        dispatch(setcount({count:countNew.count,history,callback:(val)=>{
            setValue(val)
        }}));

      }} >Save</button>
    </div>
  );
}

export default Home;
