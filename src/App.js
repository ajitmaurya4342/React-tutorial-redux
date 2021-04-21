import logo from './logo.svg';
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import {setcount} from './action'

import RouteAll1 from "./RouteAll"
 
function App() {
  const countNew=useSelector(state=>state.test);
  const dispatch=useDispatch()
  return (
    <RouteAll1 />
  );
}

export default App;
