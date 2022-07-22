import {Box,Image,Text,Spacer} from '@chakra-ui/react';
import ReactStars from "react-rating-stars-component";
import {useState,useEffect} from 'react';
import React from "react";
import { render } from "react-dom";


// const baseStyle = {
//     color: "black",
//     textDecoration: "none"
//   };
  
//   const activeStyle = {
//     color: "red",
//     textDecoration: "none"
//   };

 

function MealList(){
    let arr = [1,2,3,4,5,6];
    const [page,setPage] = useState(1);
   

    return(
        <Box>
            <Box display='flex' flexDirection='row'>
                <Box>
                    <span style={{marginRight:"7px"}}>Pages:</span>
                    {arr.map((item)=>
                        <button className='pagination'>{item}</button>
                    )}
                </Box>
                <Spacer/>
                <Box>
                    {/* <button>Next »</button> */}
                </Box>
            </Box>
        </Box>
    )
}
//style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
export default MealList;