import { Routes, Route } from "react-router-dom";
import Home from './Home';
import SignUp from './Signup';

export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Signup' element={<SignUp/>}/>
        </Routes>
    )
}
