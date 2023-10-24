import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Board from "./pages/boards/Board";
import Signup from "./pages/sign/Signup";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/board' element={<Board/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
