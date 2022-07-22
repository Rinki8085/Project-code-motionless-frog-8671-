import {Box,Image,Text,Spacer,HStack,Button} from '@chakra-ui/react';
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
        <Box mb='5'>
            <Box display='flex' flexDirection='row'>
                <Box>
                    <span style={{marginRight:"7px"}}>Pages:</span>
                    {arr.map((item)=>
                        <button className='pagination'>{item}</button>
                    )}
                </Box>
                <Spacer/>
                <Box>
                    <Button>Next »</Button>
                </Box>
            </Box>
            <Box style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)",gap:"5"}}>
            <Box width='500px' height='550px' borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' mt='5' mb='5'>
                <Box height='280'>
                    <img className='image' src='https://www.kindmeal.my/photos/deal/6/686-4475-l.jpg' alt='food-image'/>
                    <Box>
                        <div className='name-food'>Love Earth Book</div>
                    </Box>
                </Box>
                <br/>
                <br/>
                <Box>
                    <HStack pl='5' pt='5'>
                        <Text fontSize='1.1rem' color='#777777'>Figure Out Cafe</Text>
                        <Text fontSize='0.9rem' color='#999999'>—&nbsp; Klang, Selangor</Text>
                    </HStack>
                    <HStack pl='5' pt='3' pr='2'>
                        <Text fontSize='0.9rem' color='#444444'>  
                            Let us Figure Out the most delicious blend of Asian flavors, pampering you within a relaxing atmosphere! Enjoy discount off a lar..
                        </Text>
                    </HStack>
                    <HStack pl='5' pt='3' pb='4' pr='2'>
                        <Button bgColor='red.500' color='white' pl='5' pr='5' fontSize='1.2rem'>Get FREE Coupon</Button>
                        <Spacer/>
                        <HStack>
                            <Image width='25px' height='24px' src='https://www.kindmeal.my/images/icon_star.png' alt='star'/>
                            <Image width='25px' height='24px' src='https://www.kindmeal.my/images/icon_star.png' alt='star'/>
                            <Image width='25px' height='24px' src='https://www.kindmeal.my/images/icon_star.png' alt='star'/>
                            <Image width='25px' height='24px' src='https://www.kindmeal.my/images/icon_star.png' alt='star'/>
                            <Image width='25px' height='24px' src='https://www.kindmeal.my/images/icon_star.png' alt='star'/>
                        </HStack>
                        <Box>
                            <Text>(2)</Text>
                        </Box>
                    </HStack>
                    <HStack borderTop='1px solid lightgrey' height='55px'>
                        <Box borderRight='1px solid lightgrey' height='55px' display='flex' gap='1' p='2'>
                            <Image width='35px' height='35px' src='https://www.kindmeal.my/images/icon_egg.png' alt='egg'/>
                            <Image width='35px' height='35px' src='https://www.kindmeal.my/images/icon_milk.png' alt='egg'/>
                            <Image width='35px' height='35px' src='https://www.kindmeal.my/images/icon_alcohol_disabled.png' alt='egg'/>
                        </Box>
                        <Box borderRight='1px solid lightgrey' width={{lg:"250px",md:"200px",sm:'180px'}} align='center' height='55px'>
                            <Text>KindMeal Discount</Text>
                            <Text color='#fb2222' fontSize='1.3rem'>
                                15% Off
                            </Text>
                        </Box>
                        <Box align='center' height='55px'>
                            <Text textAlign='center'>Expires In</Text>
                            <Text fontSize='1.3rem' color='#888888'>13px</Text>
                        </Box>
                    </HStack>
                </Box>
            </Box>
            
            </Box>
        </Box>
    )
}
//box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
//style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
export default MealList;