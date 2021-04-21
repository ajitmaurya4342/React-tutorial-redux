import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Home"
import NewHome from "./Home";
 const RouteAll = () => {
    return (
        <BrowserRouter>
    <Route path="/" component={Home} exact></Route>
    <Route path="/Ajit" component={NewHome} exact></Route>
     
    </BrowserRouter>
    )
}

export default RouteAll;


