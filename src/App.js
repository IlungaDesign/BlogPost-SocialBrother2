
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import BlogpostCreated from "./Components/BlogpostCreated/BlogpostCreated";

function App() {
    return (
        <Switch>
            <Route exact path="/" >
                <Home/>
            </Route>
            <Route path="/Blog">
                <Blog/>
            </Route>
            <Route path="/BlogpostCreated">
                <BlogpostCreated/>
            </Route>
        </Switch>
    );
}

export default App;
