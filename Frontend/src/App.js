import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import TodoContainer from "./components/Todo/TodoContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='App-content'>
                    <Routes>
                        <Route path='/todo/' element={<TodoContainer/>}/>
                        <Route path='/home/' element={<Home/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
