import { Routes, Route } from "react-router-dom";
import Home from './Home';
import JoinHtm from './JoinHtm';
import Signup from './SignUp';
import MealDeals from '../Sub_pages/MealDeals';
import LogOut from '../Sub_pages/logOutPage';

export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/join.htm' element={<Signup/>}/>
            <Route path='/joinShop.htm' element={<Signup/>}/>
            <Route path='/deals.htm' element={<MealDeals/>}/>
            <Route path='/logout' element={<LogOut/>}/>
        </Routes>
    )
}
