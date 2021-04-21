
 import {increment} from "./VariableConst";
 export const setcount=({count,history,callback})=>dispatch=>{
  callback("3");
    dispatch({
        type:increment,
        payload:count
    });
    setTimeout(x=>{
      callback("5");
      history.push("/Ajit")
    },1000)
   
}