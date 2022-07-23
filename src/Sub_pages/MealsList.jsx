import {Box,Image,Text,Spacer,HStack,Button} from '@chakra-ui/react';
import ReactStars from "react-rating-stars-component";
import React from "react";


// const baseStyle = {
//     color: "black",
//     textDecoration: "none"
//   };
  
//   const activeStyle = {
//     color: "red",
//     textDecoration: "none"
//   };


function MealList(data){

    let data1 = data.data;

    return(
        <Box> 
            <Box style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)",gap:"5"}}>
            {data1.map((item)=>
            <Box width='500px' height='auto' borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' mt='5' mb='5' key={item.id}>
                <Box height='280px'>
                    <img height='280px' className='image' src={item.url} alt='food-image'/>
                    <Box>
                        <div className='name-food'>{item.name}</div>
                    </Box>
                </Box>
                <br/>
                <br/>
                <Box>
                    <HStack pl='5' pt='5'>
                        <Text fontSize='1.1rem' color='#777777'>{item.title}</Text>
                        <Text fontSize='0.9rem' color='#999999'>—&nbsp; {item.address}</Text>
                    </HStack>
                    <HStack pl='5' pt='3' pr='2'>
                        <Text fontSize='0.9rem' color='#444444'>  
                           {item.details}
                        </Text>
                    </HStack>
                    <HStack pl='5' pt='3' pb='4' pr='2'>
                        <Button bgColor='red.500' color='white' pl='5' pr='5' fontSize='1.2rem'>Get FREE Coupon</Button>
                        <Spacer/>
                        <HStack>
                        <ReactStars
                            value={`${item.rating}`}
                            size={24}
                            edit={false}
                        />
                        </HStack>
                        <Box>
                            <Text>({item.reviews})</Text>
                        </Box>
                    </HStack>
                    <HStack borderTop='1px solid lightgrey' height='55px'>
                        <Box borderRight='1px solid lightgrey' height='55px' display='flex' gap='1' p='2'>
                            <Image width='35px' height='35px' src={item.egg} alt='egg'/>
                            <Image width='35px' height='35px' src={item.milk} alt='egg'/>
                            <Image width='35px' height='35px' src={item.alchohol} alt='egg'/>
                        </Box>
                        <Box borderRight='1px solid lightgrey' width={{lg:"250px",md:"200px",sm:'180px'}} align='center' height='55px'>
                            <Text>KindMeal Discount</Text>
                            <Text color='#fb2222' fontSize='1.3rem'>
                                {item.discount}
                            </Text>
                        </Box>
                        <Box align='center' height='55px'>
                            <Text textAlign='center'>Expires In</Text>
                            <Text fontSize='1.3rem' color='#888888'>{item.expireDate} days</Text>
                        </Box>
                    </HStack>
                </Box>
            </Box>
            )}
            </Box>
        </Box>
    )
}
//box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
//style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
export default MealList;